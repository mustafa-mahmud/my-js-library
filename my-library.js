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

function randRange(data1, data2) {
  let store = [];
  const num1 = Math.abs(data1);
  const num2 = Math.abs(data2);
  let min = num1 < num2 ? num1 : num2;
  const max = num1 > num2 ? num1 : num2;
  min = min + 1;

  if (arguments.length > 2 || arguments.length < 2)
    throw Error('You must put 2 numbers');

  if (!Number.isInteger(num1) || !Number.isInteger(num2))
    throw Error('Only number supports');

  function doRandRange() {
    const rand = Math.floor(Math.random() * (max - min) + min);

    if (!store.includes(rand)) store.push(rand);

    if (store.length < max - min) {
      doRandRange();
    }
  }

  doRandRange();

  return store;
}
