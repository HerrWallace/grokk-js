'use strict';

const array = [5, 3, 6, 2, 10, 15, 3, 28, 64, 140, 1, 4];

const findSmallestIndex = (array) => {
  let smallest = array[0];
  let smallest_index = 0;

  for (let i = 1; i <= array.length; i++) {
    if (array[i] < smallest) {
      smallest = array[i];
      smallest_index = i;
    }
  }
  return smallest_index;
};

const selectionSort = (array) => {
  let popArray = [...array];
  let newArray = [];

  for (let i = 0; i <= array.length - 1; i++) {
    let smallest = findSmallestIndex(popArray);
    newArray.push(popArray.splice(smallest, 1)[0]);
  }
  return newArray;
};

// console.log(selectionSort(array));