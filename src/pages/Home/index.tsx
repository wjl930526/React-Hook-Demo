import React, { useState, useEffect, useContext } from "react";
import "./index.scss";
import { UserInfo } from "App";

const Home: React.FC = () => {
  const [name, setName] = useState("");
  const { userInfo } = useContext(UserInfo);
  let [number, setNumber] = useState(0);
  function alertNumber() {
    setTimeout(() => {
      // alert 只能获取到点击按钮时的那个状态
      alert(number);
    }, 3000);
  }
  const [counter, setCounter] = useState({ name: "计数器", number: 0 });
  console.log("render Counter");
  return (
    <div className="home">
      <span>clientSn: {userInfo.clientSn}</span>
      <p>i am index</p>
      <p>{number}</p>
      <button onClick={() => setNumber(number + 1)}>+</button>
      <button onClick={alertNumber}>alertNumber</button>
      <p>
        {counter.name}:{counter.number}
      </p>
      <button
        onClick={() => setCounter({ ...counter, number: counter.number + 1 })}
      >
        +
      </button>
      <button onClick={() => setCounter(counter)}>++</button>
    </div>
  );
};
export default Home;
