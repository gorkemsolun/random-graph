import React, { useState } from "react";
import GraphGenerator from "./GraphGenerator.js";
import "./App.css";
import { generateElements } from "./GenerateElements.js";

function App() {
  const layouts = ["random", "grid", "circle", "concentric", "breadthfirst"];
  const [count, setCount] = useState(0);
  const [layout, setLayout] = useState("random");
  const [graphElements, setGraphElements] = useState(generateElements);

  const handleClick = () => {
    setCount(count + 1);
    setGraphElements(generateElements);
  };

  const handleGridChange = (event) => {
    setLayout(event.target.value);
    
  };

  return (
    <div className="App">
      <div className="left-pane">
        <h1 className="title">Random Graph Generator</h1>
        <button className="new-random-graph-button" onClick={handleClick}>
          New Random Graph
        </button>
        <select
          className="layout-select-options"
          onChange={handleGridChange}
          name="Layout Type"
        >
          {layouts.map((name) => {
            return (
              <option className="layout-option" value={name}>
                {name}
              </option>
            );
          })}
        </select>
      </div>
      <GraphGenerator
        graphElements={graphElements}
        key={count}
        layout={layout}
        className="layout"
      />
    </div>
  );
}

export default App;
