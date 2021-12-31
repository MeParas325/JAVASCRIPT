// map method
const numbers = [3, 4, 5, 2]
// const square = (number)=>{
//     return number * number;
// }
// const squareNumbers = numbers.map(square);
// const squareNumbers = numbers.map(function(number){
//     return number*number;
// });
const squareNumbers = numbers.map((number)=>{
    return number*number;
});
console.log(squareNumbers);