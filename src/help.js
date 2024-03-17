export const iswinner = (gameBoard, currentmove, currentplayer) => {
  let board = [... gameBoard];
  board[currentmove]= currentplayer;
  const winlines = [
    [0,1,2,3],[4,5,6,7],[8,9,10,11],[12,13,14,15],[0,4,8,12],[1,5,9,13],[2,6,10,14],[3,7,11,15],[0,5,10,15],[3,6,9,10]
  ];
  for (let i =0; i<winlines.length;i++){
    const [a,z,e,r]=winlines[i];
    if(board[a] >0 && board[a]===board[z] &&
       board[a]===board[e] &&
       board[a]===board[r] )
       {
         return true;
       }
  }
  return false;
}


export const draw = (gameBoard, currentmove, currentplayer) => {
  let board = [... gameBoard];
  board[currentmove]= currentplayer;
  let count = board.reduce((n,x) => n + (x===0), 0);
  return count===0;
}



const getposrandomly = (gameBoard, movecheck) =>{
  let validemove = [];
  for( let i = 0 ; i<gameBoard.length ; i++){
    if(gameBoard[i] === 0){
    validemove.push(i);
    }
  }
  let randmove =  Math.floor(Math.random()* validemove.length);
  return validemove[randmove];
}

const getpos = (gameBoard, movecheck) => {
  for(let c = 0 ; c < movecheck.length ; c++){
    for(let i = 0; i < movecheck[c].max ; i +=  movecheck[c].step){
      console.log(" ",  i , " c :", c, "Value:", gameBoard[i + movecheck[c].indexes[0]])
      console.log(i ,  gameBoard[i + movecheck[c].indexes[0]].toString());
      let series = gameBoard[i + movecheck[c].indexes[0]].toString() + 
                   gameBoard[i + movecheck[c].indexes[1]].toString() +
                   gameBoard[i + movecheck[c].indexes[2]].toString() +
                   gameBoard[i + movecheck[c].indexes[3]].toString()

      switch(series){
        case "1110":
        case "2220":
          return i+ movecheck [c].indexes[3];
        case "1101":
        case "2202":
          return i+ movecheck [c].indexes[2];
        case "1011":
        case "2022":
          return i+ movecheck [c].indexes[1];
        case "0111":
        case "0222":
          return i+ movecheck [c].indexes[0];
        default:
      }
    }
  }
  return -1;
};


export const getcomputermove = (gameBoard) => {
  let movecheck = [
    {
      indexes:[0,4,8,12],
      max:4,
      step:1

    },
    {
      indexes:[0,1,2,3],
      max:16,
      step:4
    },
    {
      indexes:[0,5,10,15],
      max:16,
      step:16
    },
    {
      indexes:[3,6,9,12],
      max:16,
      step:16
    }
  ];
  let pos = getpos(gameBoard, movecheck);
  if(pos>-1) return pos;
  return getposrandomly(gameBoard);
}
