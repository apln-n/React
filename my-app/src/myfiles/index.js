import React from 'react';
import { Link } from "react-router-dom";

//Link toの文字列は、Appに書いたRoute pathと合わせる必要がある

function Index() {
  const index = (
    <div id="index">
      <h1>apln-nのページ</h1>
      <h2>コンテンツ:</h2>
      <div>
        <p><Link to="/Janken">じゃんけん</Link></p>
        <p><Link to="/Janken">じゃんけん(上と同じ)</Link></p>
      </div>
    </div>
  );
  return (index);
}

//export default [クラス名]、の形で絶対に書く必要。
export default Index;