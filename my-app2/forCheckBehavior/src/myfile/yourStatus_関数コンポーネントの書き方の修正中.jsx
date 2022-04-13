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

function MyForm() {
  let element = (
    <div>
      <div>
        <h2>入力フォーム</h2>
        <p>ステータス名を入力して強さ(星)を「←」「→」で選んでね<br/>「↑」「↓」で新しいステータスを追加・削除できるよ</p>
        <p>
          <label>おなまえ: </label><input id="name" type="text"/>
        </p>
        <div>
          <table border="0">
            <tbody>
              {li.map((n,key) => <OneStatus n={n} key={key} myKey={key}/>)}
            </tbody>
          </table>
        </div>
        <div>
          <table border="0">
            <tbody>
              <tr>
                <td><button onClick={() => buttonClicked("top")}>↑</button></td>
                <td><button onClick={() => buttonClicked("buttom")}>↓</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
  return element;
}

function MyResult(){
  /*
    関数コンポーネントの書き方にした(returnの当たり)
      いま実行しても動かない(2022.4.8)
      関数コンポーネントの中でrenderを呼び出すべきではない
        https://teratail.com/questions/247139
    ここら辺使って書き直す必要ありそう
      公式ドキュメントの進度的に、結構後(副作用フックの利用法)なので…まずは普通にドキュメントを最初から読み進めた方が良さげ
    https://stackoverflow.com/questions/61176501/why-is-document-getelementbyid-returning-null-when-there-is-an-element-with-th
  */
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
  return element;
}

//最初だけclassにしてrender()入れて、html側で<MyClass />とかやって呼び出すのが良い
//その場合はrender(return(jsxのelement),document.getElementById("なにか"))の形にする。
function func(){
  let element = (
    <div>
      <MyForm />
      <h2>↓↓↓</h2>
      <MyResult />
      <br />
    </div>
  );
  //直接ReactDOM.renderを使う
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

//↑は、setIntervalの引数にするために関数にしているだけ
//関数にしなくても良い方法がありそう…
setInterval(func, 1000);

//とりあえずnullにしておく
export default null;
