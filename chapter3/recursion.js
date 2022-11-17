'use strict';

const number = 10;

const countDown = (num) => {
  if (num <= 0) {
    return 0;
  } else {
    console.log(num);
    countDown(num - 1);
  }
};

// console.log(countDown(number));
