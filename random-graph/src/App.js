import { useState, useRef, useEffect } from 'react';
import cytoscape from 'cytoscape';
import CytoscapeComponent from 'react-cytoscapejs';
import './App.css';

function App() {
  const elements = [
    { data: { id: 'node1' } },
    { data: { id: 'node2' } },
    { data: { id: 'edge1', source: 'node1', target: 'node2' } }
  ];

  const style = [
    {
      selector: 'node',
      style: {
        'background-color': 'red',
        'label': 'data(id)'
      }
    },
    {
      selector: 'edge',
      style: {
        'width': 3,
        'line-color': 'blue',
        'target-arrow-color': 'blue',
        'target-arrow-shape': 'triangle'
      }
    }
  ];

  const layout = { name: 'grid', rows: 1 };
  
  return (
    <div className="App">
      <header className="App-header"></header>
      <CytoscapeComponent
        elements={elements}
        style={{ width: '100%', height: '600px' }}
        stylesheet={style}
        layout={layout}
      />
    </div>
  );
}

export default App;
