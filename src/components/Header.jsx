import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import {YOUTUBE_LOGO,YOUTUBE_MENU_LOGO,YOUTUBE_SEARCH_API1,YOUTUBE_USER_AVATAR,} from "../utils/constants";
import { cacheResult } from "../utils/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState(""); //search input
  //to toggle hamburger menu button
  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store)=> store.search)

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API1 + searchQuery);
    const json = await data?.json();
    console.log(searchQuery);
    setSuggestions(json[1]);
    dispatch(cacheResult({[searchQuery]:json[1]}
    ))
  };
  useEffect(() => {
    //Debouncing : Making api call after every keypress
    //if the diff. between 2 api calls > 200ms, else decline the call
    const timer = setTimeout(() => {
      if(searchCache?.[searchQuery]){
        setSuggestions(searchCache[searchQuery]);
      }else{
        getSearchSuggestions()
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  return (
    <div className="w-full h-[5rem] grid grid-flow-col p-5 mb-3 shadow-lg bg-white">
      <div className="flex h-8 col-span-1 cursor-pointer">
        <img
          className="mx-1"
          src={YOUTUBE_MENU_LOGO}
          alt="hamB_menu"
          onClick={handleToggleMenu}
        />
        <img
          className="mx-1 cursor-pointer"
          src={YOUTUBE_LOGO}
          alt="youtube-logo"
        />
      </div>

      <div className="col-span-10">
        <div className="flex items-center">
          <input
            type="text"
            className="p-2 px-5 border border-gray-500 w-3/5 rounded-s-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={()=>{setShowSuggestions(true)}}
            onBlur={()=>{setShowSuggestions(false)}}
          />
          <button className="py-2 px-4 border border-gray-500 rounded-e-full bg-gray-200">
            <CiSearch size={24} className="" />
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute bg-white mx-1  w-2/5 rounded-lg shadow-lg rounded-tl-xl border-b-0 border-gray-200">
            <ul>
              {suggestions?.map((suggestion) => {
                return (
                  <li
                    key={suggestion}
                    className="flex px-2 py-2 shadow-sm hover:bg-gray-100"
                  >
                    <CiSearch size={20} className="mx-1 mr-3" />
                    {suggestion}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>

      <div className="flex h-9 col-span-1">
        <img src={YOUTUBE_USER_AVATAR} alt="user-icon" />
      </div>
    </div>
  );
};

export default Header;
