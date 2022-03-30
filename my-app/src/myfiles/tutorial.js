/*
  公式チュートリアル(三目並べ)
    https://ja.reactjs.org/tutorial/tutorial.html#setup-option-2-local-development-environment
  ES6以前のクラス定義の実現(これで作りたい)
    https://www.yunabe.jp/docs/javascript_class_in_google.html
    this.を使うことでクラスの属性みたいに扱えるようになる
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";


let Square = function(i) {
  this.button = (
    <button className="square">
      {i}
    </button>
  );
};

let Board = function() {
  const status = 'Next player: X';

  this.Squares = (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {new Square(0).button}
        {new Square(1).button}
        {new Square(2).button}
      </div>
      <div className="board-row">
        {new Square(3).button}
        {new Square(4).button}
        {new Square(5).button}
      </div>
      <div className="board-row">
        {new Square(6).button}
        {new Square(7).button}
        {new Square(8).button}
      </div>
    </div>
  );
}

let Game = function() {
  this.board = (
    <div className="game">
      <div className="game-board">
        {new Board().Squares}
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

// ========================================
function func(){
  var game = new Game();
  return game.board;
}

export default func;