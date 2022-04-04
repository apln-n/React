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

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i) {
    const _squares = this.state.squares.slice();
    _squares[i] = this.state.xIsNext ? 'X' : 'O';
    //setStateの中では、this.stateを省略して直接このクラスにある属性の名前を書く(属性名: 代入したい値 の形)
    this.setState({
      squares: _squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
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
      </div>
    );
  }
}

// ========================================

function func(){
  return <Game />;
}

export default func;