import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

//自作のjs(webページ)をクラスとして読み込む(後のRoute elementで要素となってブラウザに表示される)
import Index from "./myfiles/index";
import Janken from "./myfiles/Janken";

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
        <Route path="/" element={<Index />} />
        <Route path="/Janken" element={<Janken />} />
      </Routes>
    </BrowserRouter>
  );
}

setInterval(App, 100);

export default App;