import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//return()のdivの中に具体的なアプリケーションを書いていく

function App() {
  var enemyHandText="", myHandText=""
  const handsDict = {"Rock":"グー", "Scissors":"チョキ", "Paper":"パー", "":""}
  const resultsDict = {"win":"勝ち", "lose":"負け", "draw":"あいこ"}

  //「続ける」を押した後、手の画像が縦並びに表示される
  function pressMyRock(){
    myHandText = "Rock"
    document.querySelector("div.Me > button.Scissors").style = "display: none"
    document.querySelector("div.Me > button.Paper").style = "display: none"
    choiceEnemyHand()
  }
  function pressMyScissors(){
    myHandText = "Scissors"
    document.querySelector("div.Me > button.Rock").style = "display: none"
    document.querySelector("div.Me > button.Paper").style = "display: none"
    choiceEnemyHand()
  }
  function pressMyPaper(){
    myHandText = "Paper"
    document.querySelector("div.Me > button.Rock").style = "display: none"
    document.querySelector("div.Me > button.Scissors").style = "display: none"
    choiceEnemyHand()
  }

  function choiceEnemyHand(){
    // 0～2の範囲
    let r = Math.floor(Math.random()*3)
    enemyHandText = ["Rock", "Scissors", "Paper"][r]
    //使わなかった手を非表示にする
    let enemyHands = document.querySelectorAll("div.Enemy > img")
    for (let i=0;i<enemyHands.length;i++){
      if(enemyHands[i].className != enemyHandText){
        enemyHands[i].style = "display: none"
      }
    }
    result()
  }
  function result(){
    const d = {"Rock":1, "Scissors":2, "Paper":3}
    if( (3+d[enemyHandText]-d[myHandText]) % 3 == 1){
      document.getElementById('result').innerHTML = "あなたの勝ち!"
    }else if( (3+d[enemyHandText]-d[myHandText]) % 3 == 2){
      document.getElementById('result').innerHTML = "あなたの負け!"
    }else{
      document.getElementById('result').innerHTML = "あいこ!"
    }
    document.getElementById('continue').style = "display: block"
  }
  function pressContinue(){
    enemyHandText = myHandText = ""
    let enemyHands = document.querySelectorAll("div.Enemy > img")
    for (let i=0;i<enemyHands.length;i++){
      enemyHands[i].style = "display: block"
    }
    let myHands = document.querySelectorAll("div.Me > button")
    for (let i=0;i<myHands.length;i++){
      myHands[i].style = "display: block"
    }
    document.getElementById('result').innerHTML = ""
    document.getElementById('continue').style = "display: none"
  }

  return (
    <BrowserRouter>
    <div className="App">
      <h1>じゃんけん</h1>
      <div className="Enemy">
        <h2>相手  {handsDict[enemyHandText]}</h2>
        <img className="Rock" width="150" height="150" src={`${process.env.PUBLIC_URL}/img/rock.png`} alt="Rock" />
        <img className="Scissors" width="150" height="150" src={`${process.env.PUBLIC_URL}/img/scissors.png`} alt="Scissors" />
        <img className="Paper" width="150" height="150" src={`${process.env.PUBLIC_URL}/img/paper.png`} alt="Paper" />
      </div>
      <br/><br/>
      <div className="Me">
        <button className="Rock" onClick={pressMyRock}>
          <img src={`${process.env.PUBLIC_URL}/img/rock.png`} alt="Rock" width="150" height="150" />
        </button>
        <button className="Scissors" onClick={pressMyScissors}>
          <img src={`${process.env.PUBLIC_URL}/img/scissors.png`} alt="Scissors" width="150" height="150" />
        </button>
        <button className="Paper" onClick={pressMyPaper}>
          <img src={`${process.env.PUBLIC_URL}/img/paper.png`} alt="Paper" width="150" height="150" />
        </button>
        <h2>あなた  {handsDict[myHandText]}</h2>
      </div>
      <div id="result"></div>
      <button id="continue" onClick={pressContinue}>続ける</button>
    </div>
    </BrowserRouter>
  );
}

setInterval(App, 100);

export default App;