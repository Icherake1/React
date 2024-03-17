import React, {useState} from "react";
import {gamestate, gamestarted, gamehaswinner, gameover, PLR0, PLR1, PLR2, nocircle} from './Constantes'

const Header = ({gamestatee, the_current_player, winner}) => {
  const renderlabel =() => {
    switch (gamestatee) {
      case gamestarted:
        return <div>pplayer {the_current_player} turn</div>;
      case gamehaswinner:
        return <div>the player {winner} winnnns</div> ;
        case gameover:
          return <div>Game over :'(</div> ;
      default :

    }
  }
  return (
    <div className="panel header">
    <div className="header-text">
      {renderlabel()}
    </div>

  </div>
);

};
export default Header;
