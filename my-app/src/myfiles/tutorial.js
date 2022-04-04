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
  this.state = {value: null};
  this.button = (
    <button className="square" onClick={() => function(){this.state.value = 'X';}}>
      {this.state.value}
    </button>
  );
  this.element = this.button;
};

let Board = function() {
  const status = 'Next player: X';

  this.squares = []
  for(let i=0;i<9;i++){
    this.squares[i] = new Square(i);
  }
  this.element = (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {this.squares[0].element}
        {this.squares[1].element}
        {this.squares[2].element}
      </div>
      <div className="board-row">
        {this.squares[3].element}
        {this.squares[4].element}
        {this.squares[5].element}
      </div>
      <div className="board-row">
        {this.squares[6].element}
        {this.squares[7].element}
        {this.squares[8].element}
      </div>
    </div>
  );
}

let Game = function() {
  this.board = new Board();
  this.element = (
    <div className="game">
      <div className="game-board">
        {this.board.element}
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
  var game = new Game()
  //console.log("The text of button[8] is \""+ game.board.squares[8].state.value + "\".");
  return game.element;
}

export default func;