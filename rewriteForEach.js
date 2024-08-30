// const ratings = [5, 4, 5];
// let sum = 0;

// const sumfn = async (a, b) => a + b;

// ratings.forEach(async (rating) => {
//   sum = await sumfn(sum, rating);
// });

// console.log(sum);

// const items = [5, 7, 9, 10];
// const copyItems = [];

// // before
// for (let i = 0; i < items.length; i++) {
//   copyItems.push(items[i]);
// }

// // after
// items.forEach((item) => {
//   copyItems.push(item);
// });
// console.log(items);
// console.log("-----------");
// console.log(copyItems);

const number = [45, 4, 9, 16, 25];
let sum = 0;
Array.prototype.myFilter = function(callback){
    let newarr = [];
    this.forEach(function(item) {
        if(callback(item)) {
            newarr.push(item);
            sum += item;
        }
    });
    return newarr;
}

function a(item){
    return item >= 9;
}

const value = number.myFilter(a);
console.log(value); 
console.log("sum aray: " + sum);

// const arrayLike = {
//   length: 4,
//   0: 2,
//   1: 3,
//   2: 4,
//   3: 5, // length = 4
//   4: 9,
//   5: 10,
// };
// Array.prototype.forEach.call(arrayLike, (x) => console.log(x));