'use strict';

function rand(...arr) {
  let userData = arr;
  let store = [];

  function doRandom() {
    const num = Math.floor(Math.random() * userData.length);
    if (!store.includes(num)) store.push(num);
    if (store.length < userData.length) {
      doRandom();
    }

    userData = userData.map((_, ind) => userData[store[ind]]);

    return userData;
  }

  doRandom();

  return userData;
}
