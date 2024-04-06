import { useState } from "react";

function Square({ value, handleTileClick }) {

   return <button className="square" onClick={handleTileClick}>{value}</button>;
}

function Board() {

  const [board, setBoard] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);
  const winner = checkWinner(board);

  function handleClick(index) {

     if(winner)
       return;

     const newBoard = board.slice();
     if(isX)
     {
       newBoard[index] = "X";
     }
     else
     {
      newBoard[index] = "O";
     }


      
     setIsX(!isX);
     setBoard(newBoard);
  }

  return (
    <>
    {winner && <div>Winner: {winner} </div>}
    <div className="board-row">
        <Square value={board[0]} handleTileClick={() => {handleClick(0)}}/>
        <Square value={board[1]} handleTileClick={() => {handleClick(1)}}/>
        <Square value={board[2]} handleTileClick={() => {handleClick(2)}}/>
    </div>
    <div className="board-row">
        <Square value={board[3]} handleTileClick={() => {handleClick(3)}}/>
        <Square value={board[4]} handleTileClick={() => {handleClick(4)}}/>
        <Square value={board[5]} handleTileClick={() => {handleClick(5)}}/>
    </div>
    <div className="board-row">
        <Square value={board[6]} handleTileClick={() => {handleClick(6)}}/>
        <Square value={board[7]} handleTileClick={() => {handleClick(7)}}/>
        <Square value={board[8]} handleTileClick={() => {handleClick(8)}}/>
    </div>
  
   </>
   );  
}

function checkWinner(board) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for(let i = 0; i < lines.length; i++)
  {
     const [a,b,c] = lines[i];
     if(board[a] && board[a] === board[b] && board[a] === board[c])
     {
        return board[a];
     }
  }

  return null;
}



   
   

export default Board;