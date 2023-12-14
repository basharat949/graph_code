function isCyclicGraph(roots) {
  const nodes = Object.keys(roots);

  for (const node of nodes) {
    const stack = [node];
    const visited = new Set();

    while (stack.length) {
      const current = stack.pop();

      if (!visited.has(current)) {
        visited.add(current);

        let neighbors = [];
        if (roots.hasOwnProperty(current)) {
          neighbors = roots[current];
        }

        for (const neighbor of neighbors) {
          if (neighbor === node) {
            return true;
          }
          stack.push(neighbor);
        }
      }
    }
  }

  return false;
}

const graph1 = {
  A: ["B"],
  B: ["C", "D"],
  C: ["A"],
};

if (isCyclicGraph(graph1)) {
  console.log(graph1, " is cyclic.");
} else {
  console.log(graph1, "is not cyclic.");
}

const graph2 = {
  A: ["B"],
  B: ["C", "D"],
};

if (isCyclicGraph(graph2)) {
  console.log(graph2, " is cyclic.");
} else {
  console.log(graph2, "is not cyclic.");
}
