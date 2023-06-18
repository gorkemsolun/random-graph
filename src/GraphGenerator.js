import React, { useRef, useEffect } from "react";
import cytoscape from "cytoscape";

function GraphGenerator (props) {
  const containerRef = useRef();

  useEffect(() => {
    let cy = cytoscape({
      container: containerRef.current,
      elements: props.graphElements,
      style: [
        {
          selector: "node",
          style: {
            "background-color": "lightblue",
            label: "data(id)",
          },
        },
        {
          selector: "edge",
          style: {
            width: 2,
            "line-color": "gray",
          },
        },
      ],
      layout: { name: props.layout },
    }, []);

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
    >
    </div>
  );
};

export default GraphGenerator;
