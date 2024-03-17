import React, {useState, useEffect} from "react";
import Gamecircle from "./Gamecircle";
import '../Game.css';
import Header from './head'
import Footer from './fooot'
import { iswinner, draw, getcomputermove} from '../help';
import {gamestate, gamestarted, gamehaswinner, gameover, PLR0, PLR1, PLR2, nocircle} from './Constantes'





const Gameboard = () => {
  const [gameBoard, updategameboard] = useState(Array(16).fill(PLR0));
  const [currentplayer, nextplayer] = useState(PLR1);
  const [gamestatee, updategamestate] = useState(gamestarted);
  const [thewinner, thenextwinner] = useState(PLR0);


  useEffect (() => {
    initalisethegame();
  },[]);

  const initalisethegame = () => {
    updategameboard(Array(16).fill(PLR0));
    nextplayer(PLR1);
    updategamestate(gamestarted);
  }


  const suggestmove = () => {
    circleclicked(getcomputermove(gameBoard));
  }

  const init_b = () =>{
    const circles = [];
    for (let i=0;i<nocircle; i++){
      circles.push(rendercircle(i));
    }
    return circles;
  }


  const circleclicked = (id) => {
    console.log(id + ' clicked');
    if(gameBoard[id]!==PLR0){
      return;
    }
    if(gamestatee!==gamestarted){
      return;
    }
    // const el_board = [... gameBoard];
    // el_board[id]= currentplayer;
    // updategameboard(el_board);
    if(iswinner(gameBoard,id, currentplayer)){
      console.log("winner is "+ currentplayer);
      updategamestate(gamehaswinner);
      thenextwinner(currentplayer);
    }

    if(draw(gameBoard,id, currentplayer)){
      console.log("game over");
      updategamestate(gameover);
      thenextwinner(PLR0);
    }

    updategameboard(prev => {//callbackS
      return prev.map((circle, positionindex) => {
        if (positionindex === id) return currentplayer ;
        return circle;
      })
    })

    nextplayer(currentplayer === PLR1 ? PLR2 : PLR1);
    console.log(gameBoard);
  }

const rendercircle= id=>{
  return <Gamecircle key={id} id={id} className={`player_${gameBoard[id]}`} oncircleclick={circleclicked}/>
}

  return (
   <>
    <Header gamestatee={gamestatee}  the_current_player={currentplayer} winner ={thewinner}/>
    <div className="gameboard">
      {init_b()}
    </div>
    <Footer onClickEv={initalisethegame} onsuggest={suggestmove}/>
   </>
 )
}

export default Gameboard;
