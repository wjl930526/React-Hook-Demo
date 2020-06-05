import React, { useState, useEffect } from "react";
import "./index.scss";

const List: React.FC = () => {
  const [name, setName] = useState("");
  return (
    <div className="list">
      <p>i am list</p>
    </div>
  );
};
export default List;
