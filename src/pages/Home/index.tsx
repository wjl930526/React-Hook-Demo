import React, { useState, useEffect, useContext } from "react";
import "./index.scss";
import { UserInfo } from "App";

const Home: React.FC = () => {
  const [name, setName] = useState("");
  const { userInfo } = useContext(UserInfo);

  return (
    <div className="home">
      <span>clientSn: {userInfo.clientSn}</span>
      <p>i am index</p>
    </div>
  );
};
export default Home;
