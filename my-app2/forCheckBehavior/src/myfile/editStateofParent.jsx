import React, { useState }  from 'react';
//import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

const Plus = (props) => {
  const count = props.countHook.count;
  const setCount = props.countHook.setCount;
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>+1</button>
    </div>
  );
}
Plus.propTypes = {
  countHook: PropTypes.object
};

const Show = (props) => {
  const count = props.count;
  return(
    <div>
      {"count = " + count}
    </div>
  );
};
Show.propTypes = {
  count: PropTypes.number
};

const App = () => {
  const [count,setCount] = useState(0);
  return (
    <div>
      <Plus countHook={{count:count, setCount:setCount}} />
      <Show count={count} />
    </div>
  );
}

export default App;
