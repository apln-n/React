//import React from 'react';
//import ReactDOM from 'react-dom';
//import './index.css';
//import reportWebVitals from './reportWebVitals';

//自作ファイル(.jsxで作ると便利)
//importの名前は大文字で始める
//(※とりあえずimportするだけでrenderされるようにしてる…)
//import Tick from './myfile/tick';
//import YourStatus from './myfile/yourStatus';
import ESLintTest from './myfile/ESLintTest';

/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

/*
  importしてきてる今だけ。'コンポーネント名' is defined but never used を消すために書いた
  ただしF12の方ではエラー出るので止めておくべき
*/
ESLintTest.abcdefg();

/*
  WebVitalが分かる。: ページを読み込むまでの時間、UXの快適さ？などの指標…
    https://qiita.com/ozaki25/items/6139cbc70cf988d1c870
*/
//reportWebVitals();