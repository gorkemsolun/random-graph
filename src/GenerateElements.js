export const generateElements = (data) => {
  let verticeCount = Math.floor(Math.random() * 100);
  let edges = [];
  for (let i = 0; i < verticeCount; i++) {
    const row = [];
    for (let j = 0; j < verticeCount; j++) {
      if (i === j && data.acyclic) {
        row.push(0);
      } else {
        const random = Math.random();
        const edge = random < data.edgeProbability ? 1 : 0;
        row.push(edge);
      }
    }
    edges.push(row);
  }

  let newElements = [];
  for (let i = 0; i < verticeCount; i++) {
    const vertice = {
      data: {
        id: "" + i,
      },
    };
    newElements.push(vertice);
  }
  for (let i = 0; i < verticeCount; i++) {
    for (let j = 0; j < verticeCount; j++) {
      if (edges[i][j] === 1) {
        const edge = {
          data: {
            id: i + "-" + j,
            source: "" + i,
            target: "" + j,
          },
        };
        newElements.push(edge);
      }
    }
  }
  return newElements;
};
