/*
  公式チュートリアル(三目並べ)
  https://ja.reactjs.org/tutorial/tutorial.html#setup-option-2-local-development-environment
*/

import React from 'react';
import { Link } from "react-router-dom";


function Square() {
  return (
    <button className="square">
      {/* TODO */}
    </button>
  );
}

function Board() {
  function renderSquare(i) {
    return <Square />;
  }
  const status = 'Next player: X';
  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
      <div>
        <p><Link to="/">ホームに戻る</Link></p>
      </div>
    </div>
  );
}

// ========================================

function func(){
  return <Game />
}

export default func;