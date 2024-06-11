import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = ["All", "Gaming", "Songs", "Live","Soccer","Cricket","Cooking","Rock"];
  return (
    <div className="flex m-2">
      {list.map((name,index)=><Button key={index} name={name} />)}

      
    </div>
  );
};

export default ButtonList;
