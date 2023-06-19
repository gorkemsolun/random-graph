export const graphStyleGenerator = (data) => {
  const style = [];
  style.push({
    selector: "node",
    style: {
      label: "data(id)",
      'background-color': data.nodeColor,
    },
  });
  style.push({
    selector: "edge",
    style: {
      width: data.edgeSize,
    },
  });
  return style;
};
