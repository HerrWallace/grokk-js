'use strict';

const array = [5, 3, 6, 2, 10, 15, 3, 28, 64, 140, 1, 4];

const quicksort = (arr) => {
  if (arr.length < 2) return arr;

  let pivot = arr[0];
  let less = arr.slice(1).filter((item) => item <= pivot);
  let greater = arr.slice(1).filter((item) => item > pivot);

  return [...quicksort(less), pivot, ...quicksort(greater)];
};

console.log(quicksort(array));
