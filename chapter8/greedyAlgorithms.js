'use strict';

let statesNeeded = new Set(['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az']);

let stations = {};
stations.kone = new Set(['id', 'nv', 'ut']);
stations.ktwo = new Set(['wa', 'id', 'mt']);
stations.kthree = new Set(['or', 'nv', 'ca']);
stations.kfour = new Set(['nv', 'ut']);
stations.kfive = new Set(['ca', 'az']);

const finalStations = new Set();

while (statesNeeded.size) {
  let bestStation = null;
  let statesCovered = new Set();

  Object.keys(stations).map((station) => {
    const states = stations[station];
    const covered = new Set([...statesNeeded].filter((item) => states.has(item)));
    if (covered.size > statesCovered.size) {
      bestStation = station;
      statesCovered = covered;
    }
  });
  statesNeeded = new Set(
    [...statesNeeded].filter((item) => !statesCovered.has(item))
  );
  finalStations.add(bestStation);
}
// console.log(finalStations);
