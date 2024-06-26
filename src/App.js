import React, { useEffect, useState } from "react";
import GraphGenerator from "./GraphGenerator.js";
import "./App.css";
import { generateElements } from "./GenerateElements.js";
import { graphStyleGenerator } from "./GraphStyleGenerator.js";

function App() {
  const layouts = [
    "circle",
    "grid",
    "random",
    "concentric",
    "breadthfirst",
    "cose-bilkent",
    "klay",
  ];
  const colors = ["red", "black", "grey", "blue", "green", "yellow", "brown"];
  const [count, setCount] = useState(0);
  const [edgeProbability, setEdgeProbability] = useState(0.02);
  const [acyclic, setAcyclic] = useState(false);
  const [nodeColor, setNodeColor] = useState("red");
  const [edgeSize, setEdgeSize] = useState(2);
  const [layout, setLayout] = useState("circle");
  const [graphElements, setGraphElements] = useState(
    generateElements({ edgeProbability: edgeProbability, acyclic: acyclic })
  );
  const [graphStyle, setGraphStyle] = useState(
    graphStyleGenerator({ nodeColor: nodeColor, edgeSize: edgeSize })
  );

  useEffect(() => {
    setGraphStyle(
      graphStyleGenerator({ nodeColor: nodeColor, edgeSize: edgeSize })
    );
  }, [nodeColor, edgeSize]);

  const handleClick = () => {
    setCount(count + 1);
    setGraphElements(
      generateElements({ edgeProbability: edgeProbability, acyclic: acyclic })
    );
  };

  const handleEdgeProbability = (event) => {
    setEdgeProbability(event.target.value);
  };

  const handleGridChange = (event) => {
    setLayout(event.target.value);
  };

  const handleEdgeSize = (event) => {
    setEdgeSize(event.target.value);
  };

  const hangleAcyclicChange = (event) => {
    setAcyclic(event.target.checked);
  };

  const handleColorChange = (event) => {
    setNodeColor(event.target.value);
  };

  return (
    <div className="App">
      <div className="pane">
        <div className="title-container">
          <img src="./assets/graph.svg"></img>
          <h1 className="title">Random Graph Generator</h1>
        </div>

        <button className="new-random-graph-button" onClick={handleClick}>
          New Random Graph
        </button>
        <div className="acyclic-container">
          <h1 className="acyclic-title">Acyclic</h1>
          <input
            className="acyclic-input"
            type="checkbox"
            onChange={hangleAcyclicChange}
            checked={acyclic}
          />
        </div>
        <div className="edge-probability-container">
          <h1 className="edge-probability-title">Edge Probability</h1>
          <input
            className="edge-probability-input"
            value={edgeProbability}
            type="number"
            onChange={handleEdgeProbability}
          ></input>
        </div>
        <div className="edge-size-container">
          <h1 className="edge-size-title">Edge Size</h1>
          <input
            className="edge-size-input"
            value={edgeSize}
            type="number"
            onChange={handleEdgeSize}
          ></input>
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
        graphStyle={graphStyle}
      />
    </div>
  );
}

export default App;
