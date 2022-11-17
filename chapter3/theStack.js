'use strict';

const fact = (x) => {
  let num = x;
  if (num === 1) {
    return 1;
  } else {
    return num * fact(num - 1);
  }
};

// console.log(fact(8));
