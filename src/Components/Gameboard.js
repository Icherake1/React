import React, {useState} from "react";
import Gamecircle from "./Gamecircle";
import '../Game.css'


const PLR0=0;
const PLR1=1;
const PLR2=2;



const Gameboard = () => {
  const [gameBoard, updategameboard] = useState(Array(16).fill(2));
  const [currentplayer, nextplayer] = useState(PLR0);
  console.log(gameBoard);

  const circleclicked = (id) => {
    console.log(id + ' youpi');
    const el_board = [... gameBoard];
    el_board[id]= currentplayer;
    updategameboard(el_board);

    nextplayer(currentplayer === PLR1 ? PLR2 : PLR1);
    console.log(gameBoard);
  }

const rendercircle= id=>{
  return <Gamecircle id={id} className={`player_${gameBoard[id]}`} oncircleclick={circleclicked}/>
}

  return (
  <div className="gameboard">
    {rendercircle(0)}
    {rendercircle(1)}
    {rendercircle(2)}
    {rendercircle(3)}
    {rendercircle(4)}
    {rendercircle(5)}
    {rendercircle(6)}
    {rendercircle(7)}
    {rendercircle(8)}
    {rendercircle(9)}
    {rendercircle(10)}
    {rendercircle(11)}
    {rendercircle(12)}
    {rendercircle(13)}
    {rendercircle(14)}
    {rendercircle(15)}
    {rendercircle(16)}
    
   </div>
 )
}

export default Gameboard;
