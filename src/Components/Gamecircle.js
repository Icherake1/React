import React, {useState} from "react";
import '../Game.css';

const Gamecircle = ({id, children, className, oncircleclick}) => {
  //console.log(id);
  return (
    <div className ={`gamecircle ${className}`}  onClick= {()=>oncircleclick(id)}>

      {children}
    </div>
  )
}

export default Gamecircle;
