import React, { useRef, useEffect } from "react";
import cytoscape from "cytoscape";

function GraphGenerator (count) {
  const containerRef = useRef();

  useEffect(() => {
    let verticeCount = Math.floor(Math.random() * 100);
    let edgeCount = Math.floor(
      Math.random() * ((verticeCount * (verticeCount - 1)) / 2)
    );
    let edges = [];
    for (let i = 0; i < verticeCount; i++) {
      const row = [];
      for (let j = 0; j < verticeCount; j++) {
        if (i === j) {
          row.push(0); // No self-loops
        } else {
          const random = Math.random();
          const edge = random < 0.1 ? 1 : 0;
          row.push(edge);
        }
      }
      edges.push(row);
    }

    let newElements = [];
    for (let i = 0; i < verticeCount; i++) {
      const vertice = {
        data: {
          id: ""+i
        } 
      };
      newElements.push(vertice);
    }
    for (let i = 0; i < verticeCount; i++) {
      for (let j = 0; j < verticeCount; j++) {
        if (edges[i][j] === 1) {
          const edge = {
            data: {
              id: i+"-"+j,
              source: ""+i,
              target: ""+j
            } 
          };
          newElements.push(edge);
        }
      }
    }
    let cy = cytoscape({
      container: containerRef.current,
      elements: newElements,
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
      layout: { name: "grid" },
    });

    return () => {
      cy.destroy();
    };
  }, []);

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
