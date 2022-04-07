import React from 'react';
import ReactDOM from 'react-dom';

//liの初期化。liには各ステータスの星の個数(整数値)が格納される
//map()によりkeyをリストの要素番号にしてる
let li = [0];

function buttonClicked(d,key){
  if(d === "buttom"){
    li.push(0);
  }else if(d === "top"){
    li.pop();
  }else if(d === "right"){
    li[key] += 1;
  }else if(d === "left"){
    if(li[key] > 0){
      li[key] -= 1;
    }
  }
  return null;
}

function OneStatus(props){
  const stars = (n) =>{
    if(n > 0){
      return "★"+stars(n-1);
    }else{
      return "";
    }
  };
  return (
    <tr>
      <td><button onClick={() => buttonClicked("left",props.myKey)}>←</button ></td>
      <td><button onClick={() => buttonClicked("right",props.myKey)}>→</button ></td>
      <td><input id={"statusName_"+props.myKey} type="text" /></td>
      <td><label id={"statusN_"+props.myKey}>{stars(props.n)}</label></td>
    </tr>
  );
}

function myForm() {
  let element = (
    <div>
      <div>
        <h2>入力フォーム</h2>
        <p>ステータス名を入力して強さ(星)を「←」「→」で選んでね<br/>「↑」「↓」で新しいステータスを追加・削除できるよ</p>
        <p>
          <label>おなまえ: </label><input id="name" type="text"/>
        </p>
        <p>
          <table border="0">
            <tbody>
              {li.map((n,key) => <OneStatus n={n} key={key} myKey={key}/>)}
            </tbody>
          </table>
        </p>
        <p>
          <table border="0">
            <tbody>
              <tr>
                <td><button onClick={() => buttonClicked("top")}>↑</button></td>
                <td><button onClick={() => buttonClicked("buttom")}>↓</button></td>
              </tr>
            </tbody>
          </table>
        </p>
      </div>
    </div>
  );
  //func()のelementにある<div id="myForm"></div>にrenderする
  ReactDOM.render(
    element,
    document.getElementById('myForm')
  );
  return null;
}

function myResult(){
  const NameAndStars = (props) => {
    return (
      <tr>
        <td>{document.getElementById("statusName_"+props.myKey).value}</td>
        <td>{document.getElementById("statusN_"+props.myKey).innerHTML}</td>
      </tr>
    );
  }
  let element = (
    <div>
      <h2>あなたのステータス</h2>
      <h3>{document.getElementById("name").value}</h3>
      <table border="0">
        <tbody>
          {li.map((n,key) => <NameAndStars key={key} myKey={key} />)}
        </tbody>
      </table>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('myResult')
  );
}

function func(){
  let element = (
    <div>
      <div id="myForm"></div>
      <h2>↓↓↓</h2>
      <div id="myResult"></div>
      <br />
    </div>
  );
  //直接ReactDOM.renderを使う
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
  myForm();
  myResult();
}

setInterval(func, 50);

//とりあえずnullにしておく
export default null;
