/*****Multiple ways to copying the array *****/
// let arr1 = ["Tannu", "Paras"];
// let arr2 = arr1.slice(0);
// let arr2 = [].concat(arr1);
// let arr2 = [].concat(arr1);
// Spread Operator
// let arr2 = [...arr1];
// // let arr2 = arr1;
// console.log(arr1);
// console.log(arr2);
// console.log(arr1 == arr2);

// let marks = ["23", "24", "35"];
// let marks1 = [23, 24, 35]
// console.log(marks == marks1);

let arr1 = ["Tannu", "Paras"];
// let arr2 = arr1.slice(0).concat(["Palak"]);
let arr2 = [...arr1, "Item1", "Item2"];
console.log(arr1);
let arr3 = [...arr1, ...arr2];
// let arr3 = [...arr1, arr2];
console.log(arr3);
console.log(arr2);