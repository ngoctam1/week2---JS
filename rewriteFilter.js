// const number = [45,4,9,16,25];
// Array.prototype.filter = function(num){
//     let newarr = [];
//     for(let i=0;i< this.length;i++){
//         if(this[i]>num)
//             newarr.push(this[i]);
//     }
//     return newarr;
// }

// function a(item){
//     return item > 9 ;
// }

// const value = number.filter(a);
// console.log(value);

// const number = [45, 4, 9, 16, 32, 14, 25];

// Array.prototype.myFilter = function(callbackfn){
//     let newarr = [];
//     for(let i = 0; i < this.length; i++){
//         if(callbackfn(this[i])) {
//             newarr.push(this[i]*2); // thay đổi theo ý muốn
//         }
//     }
//     return newarr;
// }

// function a(item){
//     return item > 9;
// }

// const value = number.myFilter(a);
// console.log(value);


 const array = [-3, 2, 3, 4, 8, 9, 10, 11];
// function a(item){
//     return item % 2 !=0;
// }

// const b = array.filter(a);
// console.log(b);

// const a = (element, index) => {
//     console.log(`a[${index}] = ${element}`);
//   };

// array.forEach(a);

const number = [45, 4, 9, 16, 25];
let a = 0;
Array.prototype.myFilter = function(callback){
    let newarr = 0;
    this.forEach(function(item) {
        if(callback(item)) {
            newarr.push(item);
            

        }
    });
    return newarr;
}

function a(item){
    return item > 9;
}

const value = number.myFilter(a);
console.log(value);
