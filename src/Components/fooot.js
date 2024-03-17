import React, {useState} from "react";

const Footer = ({onClickEv, onsuggest}) => {
  return (
    <div className="panel footer">
    <button onClick={onClickEv}>
      New game
    </button>

    <button onClick={onsuggest}>
      Suggest
    </button>
    

  </div>
);

};
export default Footer;
