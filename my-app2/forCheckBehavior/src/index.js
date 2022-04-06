import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';

//自作ファイル(.jsxで作ると便利)
//importの名前は大文字で始める
import Tick from './myfile/tick';

//"type is invalid"のエラーは無視して良い(jsxをreturnするためにimportしてるわけじゃないので)

/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

//<App />
<Tick />

//reportWebVitals();