import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector(store=>store?.app?.isMenuOpen);
  //  early return pattern
  if(!isMenuOpen) return;
  
  return (
    <div className="p-3 shadow-lg w-48">
      <ul className="my-2">
        <li><Link to={"/"}>Home</Link></li>
        <li>Shorts</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold">Subscriptions</h1>
      <ul className="my-2">
        <li>Music</li>
        <li>Sports</li>
        <li>Movies</li>
        <li>Gaming</li>
      </ul>
      <h1 className="font-bold">WatchLater</h1>
      <ul className="my-2">
        <li>Music</li>
        <li>Sports</li>
        <li>Movies</li>
        <li>Gaming</li>
      </ul>
    </div>
  );
};

export default Sidebar;
