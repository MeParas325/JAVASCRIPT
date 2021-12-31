// filter function
const numbers = [1, 2, 4, 6, 3, 67];
// const isEven = function(number){
//     return number%2==0;
// }
const evenNumbers = numbers.filter((number)=>{
    return number%2 == 0;
});
console.log(evenNumbers);

