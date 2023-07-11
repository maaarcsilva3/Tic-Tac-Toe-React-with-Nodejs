import React, { useState } from 'react';
import './App.css';

function Tictactoe() {
    const [board, setBoard] = useState(Array(9).fill(''));
    const [player, setPlayer] = useState('X');
    const [xscore, setXScore] = useState(0);
    const [oscore, setOScore] = useState(0);
  
    const play = (cellIndex) => {
      if (board[cellIndex] === '') {
        const newBoard = [...board];
        newBoard[cellIndex] = player;
        setBoard(newBoard);
  
        if (checkWin(newBoard)) {
          alert(player + ' wins!');
          if (player === 'X') {
            setXScore(xscore + 1);
          } else {
            setOScore(oscore + 1);
          }
        } else if (newBoard.every((cell) => cell !== '')) {
          alert("It's a tie!");
        } else {
          setPlayer(player === 'X' ? 'O' : 'X');
        }
      }
    };
  
    const checkWin = (currentBoard) => {
      const winStatus = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
  
      for (let i = 0; i < winStatus.length; i++) {
        const [a, b, c] = winStatus[i];
        if (
          currentBoard[a] !== '' &&
          currentBoard[a] === currentBoard[b] &&
          currentBoard[a] === currentBoard[c]
        ) {
          return true;
        }
      }
      return false;
    };
  
    const restart = () => {
      setBoard(Array(9).fill(''));
      setPlayer('X');
    };
  
    return (
      <div>
        <div className="scoreboard">
          <span>X Score: {xscore}</span>
          <span className="playero-score">O Score: {oscore}</span>
        </div>
        <div className="game">
          {board.map((cell, index) => (
            <div className="cell" key={index} onClick={() => play(index)}>
              {cell}
            </div>
          ))}
        </div>
        <button className="reset" onClick={restart}>
          Restart
        </button>
      </div>
    );
  }

export default Tictactoe;
