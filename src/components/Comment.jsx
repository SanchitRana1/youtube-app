import React from "react";
import { YOUTUBE_USER_AVATAR } from "../utils/constants";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex p-2 bg-gray-100 rounded-lg my-1">
      <img className="w-12 h-12" src={YOUTUBE_USER_AVATAR} alt="user-icon" />

      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
