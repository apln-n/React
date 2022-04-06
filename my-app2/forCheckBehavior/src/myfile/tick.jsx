import React from 'react';
import ReactDOM from 'react-dom';

function tick() {
  let element = (
    <div>
      <h2>It is {new Date().toLocaleTimeString()} now!!!!!!!</h2>
      <br />
    </div>
  );
  //後のために、ここで直接ReactDOM.render使うことにする
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
  return null;
}

setInterval(tick, 100);

//とりあえずnullにしておく
export default null;
