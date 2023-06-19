import React, { useEffect, useState } from "react";
import GraphGenerator from "./GraphGenerator.js";
import "./App.css";
import { generateElements } from "./GenerateElements.js";
import { graphStyleGenerator } from "./GraphStyleGenerator.js";

function App() {
  const layouts = ["circle", "grid", "random", "concentric", "breadthfirst"];
  const colors = ["red", "black", "grey", "blue", "green", "yellow", "brown"];
  const [count, setCount] = useState(0);
  const [nodeColor, setNodeColor] = useState("red");
  const [edgeSize, setEdgeSize] = useState(2);
  const [layout, setLayout] = useState("circle");
  const [graphElements, setGraphElements] = useState(generateElements);
  const [graphStyle, setGraphStyle] = useState(
    graphStyleGenerator({ nodeColor: nodeColor, edgeSize: edgeSize})
  );
  
  useEffect(() => {
  }, [graphStyle]);

  const calculateGraphStyle = () => {
    setGraphStyle(graphStyleGenerator({ nodeColor: nodeColor, edgeSize: edgeSize}));
  }

  const handleClick = () => {
    setCount(count + 1);
    setGraphElements(generateElements);
  };

  const handleGridChange = (event) => {
    setLayout(event.target.value);
    setCount(count + 1);
  };

  const handleEdgeSize = (event) => {
    setEdgeSize(event.target.value);
    calculateGraphStyle();
    setCount(count + 1);
  }

  const handleColorChange = (event) => {
    setNodeColor(event.target.value);
    calculateGraphStyle();
    setCount(count + 1);
  };

  return (
    <div className="App">
      <div className="pane">
        <h1 className="title">Random Graph Generator</h1>
        <button className="new-random-graph-button" onClick={handleClick}>
          New Random Graph
        </button>
        <div className="edge-size">
          <h1 className="edge-size-title">Edge Size</h1>
          <input className="edge-size-input" type="number" onChange={handleEdgeSize}></input>
        </div>
        <div className="color-container">
          <h1 className="node-color-title">Node Color</h1>
          <select
            className="node-color-select-options"
            onChange={handleColorChange}
          >
            {colors.map((name) => {
              return (
                <option className="node-color-option" value={name}>
                  {name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="layout-type-container">
          <h1 className="layout-type-title">Layout Type</h1>
          <select className="layout-select-options" onChange={handleGridChange}>
            {layouts.map((name) => {
              return (
                <option className="layout-option" value={name}>
                  {name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <GraphGenerator
        graphElements={graphElements}
        key={count}
        layout={layout}
        style={graphStyle}
        className="layout"
      />
    </div>
  );
}

export default App;
