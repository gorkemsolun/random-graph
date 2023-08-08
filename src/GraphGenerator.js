// graph generator
import React, { useRef, useEffect } from "react";
import cytoscape from "cytoscape";
import "./App.css";
import coseBilkent from "cytoscape-cose-bilkent";
import klay from "cytoscape-klay";

function GraphGenerator(props) {
  const containerRef = useRef();

  useEffect(() => {
    cytoscape.use(klay);
    cytoscape.use(coseBilkent);
    let cy = cytoscape(
      {
        container: containerRef.current,
        elements: props.graphElements,
        style: props.graphStyle,
        layout: { name: props.layout },
      },
      []
    );

    return () => {
      cy.destroy();
    };
  });
  return (
    <div
      ref={containerRef}
      style={{
        top: "5vh",
        width: "100vw",
        height: "95vh",
      }}
    ></div>
  );
}

export default GraphGenerator;
