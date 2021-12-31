// for loops in array
const fruits = ["apple", "mango", "banana", "grapes"];
const fruits2 = [];

// for(let fruit of fruits){
//     console.log(fruit);
// }

for(let fruit of fruits){
    fruits2.push(fruit.toUpperCase());
}

console.log(fruits2);
