const array = [45, 4, 9, 16, 25];
const init = 0;
const sumfn = array.reduce(
  (a, b) => a + b,
  init,
);

console.log(sumfn);

