'use strict';

function randAll(...arr) {
  let userData = arr;
  let store = [];
  let send = [];

  function doRandom() {
    const num = Math.floor(Math.random() * userData.length);
    if (!store.includes(num)) store.push(num);
    if (store.length < userData.length) {
      doRandom();
    }

    send = userData.map((_, ind) => userData[store[ind]]);
  }

  doRandom();

  return send;
}
