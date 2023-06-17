import React, { useState } from "react";
import GraphGenerator from "./GraphGenerator.js";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  
  const handleClick = () => {
    setCount(count+1);
    console.log(count);
  }

  return (
    <div className="App">
      <div className="left-pane">
        <h1 className='title'>Random Graph Generator</h1>
        <button className="new-random-graph-button" onClick={handleClick}>
          New Random Graph
        </button>
      </div>
      <GraphGenerator key={count} className="layout"/>
    </div>
  );
}

export default App;
