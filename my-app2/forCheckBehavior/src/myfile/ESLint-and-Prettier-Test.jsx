import React from 'react';
import ReactDOM from 'react-dom';
/*
  これも要る('propに追加？した変数名' is missing in props validation)
  構文: propsを使ってるコンポーネント名.propTypes={変数名: PropTypes.型指定？, …};
*/
import PropTypes from 'prop-types';

function Hello(props){
  const element = (
    <div>
    <h2>Hello, {props.myname}!</h2><h2>It&apos;s {new Date().toLocaleTimeString()} now.</h2>
    </div>
  );
  return element;
}

Hello.propTypes = {
  myname: PropTypes.string
};

function func(){
  const element = (<div>
      <Hello myname="apln-n" />
    </div>
  );
  //直接ReactDOM.renderを使う
  ReactDOM.render(element,   document.getElementById('root'));
}

  setInterval(func,   100);

//renderの順番を考慮することがあったので、しばらくこのexport default null;で行きたい
//コーディング課題などでは避けたい(たぶん大丈夫)
export default func;
