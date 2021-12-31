//Array destructing
let array = ["item1", "item2", "item3"];
let array2 = ["Apple", "Mango", "Banana", "Peanuts"];

// let myvar1 = array[0];
// let myvar2 = array[1];

// console.log("First value is:", myvar1);
// console.log("Second value is:", myvar2);

//new Way
// let [myvar1, myvar2] = array;
// console.log(myvar1, myvar2);
// let [fruit1, fruit2, fruit3, fruit4, fruit5, fruit6] = array2;
// console.log(array2);
// let myfr = ["fruit1", "fruit2", "fruit3", "fruit4", "fruit5", "fruit6"];
// let newarr = myfr.slice(4);
// console.log(newarr);
let myfr = ["fruit1", "fruit2", "fruit3", "fruit4", "fruit5", "fruit6"];
let [myvar1, myvar2, ...arr] = myfr;
console.log(arr);
