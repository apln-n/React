/*
  公式チュートリアル(三目並べ)
  https://ja.reactjs.org/tutorial/tutorial.html#setup-option-2-local-development-environment
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";


class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {/* TODO */}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
        <div className="back-to-top">
          <p><Link to="/">ホームに戻る</Link></p>
        </div>
      </div>
    );
  }
}

// ========================================

function func(){
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
}

export default func;