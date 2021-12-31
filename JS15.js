// for in loopin array
const fruits = ["apple", "mango", "banana", "grapes"];
const fruits2 = [];

// for(let index in fruits){
//     console.log(fruits[index]);
// }

for(let index in fruits){
    fruits2.push(fruits[index].toUpperCase());
}
console.log(fruits2);
