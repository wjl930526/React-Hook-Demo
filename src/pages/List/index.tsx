import React, { useState, useEffect } from "react";
import "./index.scss";

const List: React.FC = () => {
  const [name, setName] = useState("");
  const [t, setT] = useState("<h1>标题名称</h1>");
  return (
    <div className="list">
      <div dangerouslySetInnerHTML={{ __html: t }}></div>
      <p>i am list</p>
    </div>
  );
};
export default List;
