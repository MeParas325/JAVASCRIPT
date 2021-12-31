/*****Primitive vs refrence type*****/
// let num1 = 4;
// let num2 = num1;
// console.log("value of num1 is:"+num1);
// console.log("value of num2 is:", num2);
// num1++;
// console.log("After incremeneting values are:");
// console.log("value of num1 is:"+num1);
// console.log("value of num2 is:", num2);

/*****Refrence type*****/
let arr1 = ["Item1", "Item2"];
let arr2 = arr1;
console.log("Values in arr1 are:"+arr1);
console.log("Values in arr2 are:",arr2);
arr1.push("Item3");
console.log("After pushing the element to arr1:");
console.log("Values in arr1 are:"+arr1);
console.log("Values in arr2 are:",arr2);