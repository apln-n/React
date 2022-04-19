import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import reportWebVitals from './reportWebVitals';

//自作ファイル(.jsxで作ると便利)
//importの名前は大文字で始める
//(※とりあえずimportするだけでrenderされるようにしてる…)
//import Tick from './myfile/tick';
//import YourStatus from './myfile/yourStatus';
//import ESLintTest from './myfile/ESLintTest';
//import App from './myfile/editStateofParent'

import App from './myfile/searchYourPrivateTweets'


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/*
  WebVitalが分かる。: ページを読み込むまでの時間、UXの快適さ？などの指標…
    https://qiita.com/ozaki25/items/6139cbc70cf988d1c870
*/
//reportWebVitals();