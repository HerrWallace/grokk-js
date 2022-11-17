'use strict';

const graph = new Map();
graph.set('you', ['alice', 'bob', 'claire']);
graph.set('bob', ['anuj', 'peggy']);
graph.set('alice', ['peggy']);
graph.set('claire', ['thom', 'jonny']);
graph.set('anuj', []);
graph.set('peggy', []);
graph.set('thom', []);
graph.set('jonny', []);

const search = (name) => {
  let searched = [];
  let search_queue = [...graph.get(name)];

  while (search_queue) {
    let person = search_queue.shift();

    if (!searched.includes(person)) {
      if (person[person.length - 1] === 'm') {
        console.log(`${person} is a mango seller!`);
        return true;
      } else {
        search_queue.push(...graph.get(person));
        searched.push(person);
      }
    }
  }
  return false;
};

// console.log(search('you'));
