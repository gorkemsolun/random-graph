import React, { useRef, useEffect } from "react";
import cytoscape from "cytoscape";
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
        style: props.style,
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
        width: "100vw",
        height: "100vh",
      }}
    ></div>
  );
}

export default GraphGenerator;
