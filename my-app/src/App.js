import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

//自作のjs(webページ)をクラスとして読み込む(後のRoute elementで要素となってブラウザに表示される)
import Top from "./myfiles/top";
import Janken from "./myfiles/Janken";
import Tutorial from "./myfiles/tutorial";

//return()のdivの中に具体的なアプリケーションを書いていく

/*
  react-routerの書き方
  https://github.com/remix-run/react-router/blob/main/docs/getting-started/tutorial.md
  https://coders-shelf.com/react-router-v6-intro/
*/

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/Janken" element={<Janken />} />
        <Route path="/tutorial" element={<Tutorial />} />
      </Routes>
    </BrowserRouter>
  );
}

setInterval(App, 100);

export default App;