'use strict';

const graph = {
  start: {
    a: 6,
    b: 2,
  },
  a: {
    fin: 1,
  },
  b: {
    a: 3,
    fin: 5,
  },
  fin: {},
};
const costs = {
  a: 6,
  b: 2,
  fin: Infinity,
};
const parents = {
  a: 'start',
  b: 'start',
  fin: null,
};
let processed = [];

const findLowestCostNode = (costs) => {
  let lowestCost = Infinity;
  let lowestCostNode = null;

  Object.keys(costs).map((node) => {
    const cost = costs[node];

    if (cost < lowestCost && processed.indexOf(node) === -1) {
      lowestCost = cost;
      lowestCostNode = node;
    }
  });
  return lowestCostNode;
};

let node = findLowestCostNode(costs); // b
while (node !== null) { // while we have nodes to check and they are not in processed []
  let cost = costs[node]; // to b costs 2
  let neighbors = graph[node]; // neighbors of b are a, fin
  Object.keys(neighbors).map((n) => { // check a, and fin
    let newCost = cost + neighbors[n]; // a) = 2 + 3        fin) = 2 + 5
    if (costs[n] > newCost) { // a) st->a > st->b->a        fin) inf > 7 
      costs[n] = newCost; // a) a new optimised path's cost fin) good path, at least it exists
      parents[n] = node; // a) path from b to a             fin) now has parent
    }
  });

  processed = processed.concat(node);

  node = findLowestCostNode(costs);
}

// console.log(costs);
