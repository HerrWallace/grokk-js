'use strict';

let voted = new Map();

const checkVoter = (person) => {
  if (voted.has(person)) {
    console.log('Kick them out!');
  } else {
    voted.set(person, true);
    console.log('Let them vote!');
  }
};
