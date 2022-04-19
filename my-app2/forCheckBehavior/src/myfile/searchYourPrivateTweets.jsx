import React, { useState } from "react";
//import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const getTweets = (props) => {
  const fileElement = document.getElementById("yourFile");
  if (fileElement.files.length > 0) {
    const file = fileElement.files[0];
    if (file.type.indexOf("text") == 0) {
      const fileReader = new FileReader();
      //ファイル読み込み
      fileReader.onload = function () {
        const txtStr = fileReader.result;
        const txtList = txtStr.split(/\n|\r/g).filter((value) => value !== "");
        console.log(txtList);
        props.setTweets(txtList);
        console.log("ファイル読み込み成功");
      };
      //以下の文は絶対に必要
      fileReader.readAsText(file);
    } else {
      console.log("txtを指定してください");
    }
  } else {
    console.log("ファイルを指定してください");
  }
};

const GetResult = (props) => {
  const tweets = props.tweets;
  const setResult = props.setResult;
  let result = [];
  let yourStr = document.getElementById("yourWords").value;
  //console.log("length = " + yourStr.length)
  if (tweets.length > 0) {
    if (yourStr.length > 0) {
      if (yourStr.indexOf("AND") !== -1 && yourStr.indexOf("OR") !== -1) {
        console.log("ANDとORを同時に含めないでください");
      } else {
        //AND検索
        if (yourStr.indexOf("OR") === -1) {
          yourStr = yourStr.replaceAll(" ", "AND").replaceAll("　", "AND");
          const yourWords = yourStr
            .split("AND")
            .filter((value) => value !== "");
          //console.log(yourWords);
          for (let i = 0; i < tweets.length; i++) {
            let flag = true;
            //console.log(yourWords)
            for (let j = 0; j < yourWords.length; j++) {
              //console.log("tweet: "+tweets[i]+", word: "+yourWords[j]+" ("+tweets[i].indexOf(yourWords[j])+")")
              if (tweets[i].indexOf(yourWords[j]) === -1) {
                flag = false;
                break;
              }
            }
            if (flag) {
              result.push(tweets[i]);
            }
          }
        }
        //OR検索
        else {
          yourStr = yourStr.replaceAll(" ", "OR").replaceAll("　", "OR");
          //半角・全角スペースを無しにして文字列を各単語に分割
          const yourWords = yourStr.split("OR").filter((value) => value !== "");
          for (let i = 0; i < tweets.length; i++) {
            for (let j = 0; j < yourWords.length; j++) {
              //console.log("tweet: "+tweets[i]+", word: "+yourWords[j]+" ("+tweets[i].indexOf(yourWords[j])+")")
              if (tweets[i].indexOf(yourWords[j]) !== -1) {
                result.push(tweets[i]);
                break;
              }
            }
          }
        }
        console.log(
          "結果を取得しました [" +
            document.getElementById("yourWords").value +
            "]"
        );
      }
    } else {
      console.log("検索したいワードを入力してください");
    }
  } else {
    console.log("ファイルを読み込めませんでした");
  }
  setResult(result);
};
GetResult.propTypes = {
  tweet: PropTypes.array,
  setResult: PropTypes.func,
};

const SelectAndLoadFile = (props) => {
  const setTweets = props.setTweets;
  return (
    <div>
      <input
        type="file"
        id="yourFile"
        onChange={() => getTweets({ setTweets: setTweets })}
      />
    </div>
  );
};
SelectAndLoadFile.propTypes = {
  setTweets: PropTypes.func,
};

//ワード入力、検索ボタン
const InputYourWords = (props) => {
  const tweets = props.tweets;
  const setResult = props.setResult;
  /*
    formのonSubmitで画面全更新をさせない方法:
    https://teratail.com/questions/300066
  */
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          return false;
        }}
      >
        <input type="text" id="yourWords" autoComplete="off" />
        <button
          onClick={() => GetResult({ tweets: tweets, setResult: setResult })}
        >
          検索
        </button>
      </form>
    </div>
  );
};
InputYourWords.propTypes = {
  tweets: PropTypes.array,
  setResult: PropTypes.func,
};

const TweetElement = (props) => {
  const tweet = props.tweet;
  console.log("tweet = " + tweet);
  return <div>{tweet}</div>;
};
TweetElement.propTypes = {
  tweet: PropTypes.string,
};

const ShowResult = (props) => {
  const [element, setElement] = useState(<></>);
  const result = props.result;
  React.useEffect(() => {
    if (result.length > 0) {
      //以下のtweetはHookと関係無い(ただのresultの要素)
      //console.log("結果を表示します")
      setElement(
        <div>
          <div>検索結果</div>
          <div>
            {result.map((tweet, key) => (
              <TweetElement tweet={tweet} key={key} />
            ))}
          </div>
        </div>
      );
    } else {
      setElement(
        <div>
          <div>検索結果</div>
        </div>
      );
    }
  }, [result]);
  return element;
};
ShowResult.propTypes = {
  result: PropTypes.array,
};

const App = () => {
  //Hookそのものをpropsで渡せばグローバル変数もuseContextも必要なさそう
  //tweets,resultはリスト
  const [tweets, setTweets] = useState([]);
  const [result, setResult] = useState([]);
  return (
    <div>
      <SelectAndLoadFile setTweets={setTweets} />
      <InputYourWords tweets={tweets} setResult={setResult} />
      <br />
      <ShowResult result={result} />
    </div>
  );
};

export default App;
