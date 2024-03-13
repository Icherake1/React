import React, {useState} from "react";
import Gamecircle from "./Gamecircle";
import '../Game.css'

const Gameboard = () => {
  const [gameBoard, updategameboard] = useState(Array(16).fill(0));
  console.log(gameBoard);
  const circleclicked = (id) => {
    console.log(id + ' youpi');
    gameBoard[id]= 1;
    updategameboard=(gameBoard);
    console.log(gameBoard);
  }
  return (
  <div className="gameboard">
  <Gamecircle id={1} className="player1" oncircleclick={circleclicked}>
  </Gamecircle>

  <Gamecircle id={2} oncircleclick={circleclicked}>

  </Gamecircle>

  <Gamecircle id={3} oncircleclick={circleclicked}>
  </Gamecircle>

  <Gamecircle id={4} oncircleclick={circleclicked}>

  </Gamecircle>

  <Gamecircle id={5} oncircleclick={circleclicked}>
  </Gamecircle>

  <Gamecircle id={6} oncircleclick={circleclicked}>

  </Gamecircle>

  <Gamecircle id={7} oncircleclick={circleclicked}>
  </Gamecircle>

  <Gamecircle id={8} oncircleclick={circleclicked}>

  </Gamecircle>

  <Gamecircle id={9} oncircleclick={circleclicked}>
  </Gamecircle>

  <Gamecircle id={10} oncircleclick={circleclicked}>

  </Gamecircle>

  <Gamecircle id={11} oncircleclick={circleclicked}>
  </Gamecircle>

  <Gamecircle id={12} oncircleclick={circleclicked}>

  </Gamecircle>

  <Gamecircle id={13} oncircleclick={circleclicked}>
  </Gamecircle>

  <Gamecircle id={14} oncircleclick={circleclicked}>

  </Gamecircle>

  <Gamecircle id={15} oncircleclick={circleclicked}>
  </Gamecircle>

  <Gamecircle id={16} oncircleclick={circleclicked}>

  </Gamecircle>

   </div>
 )
}

export default Gameboard;
