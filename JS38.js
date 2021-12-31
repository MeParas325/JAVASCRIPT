// reduce method
const numbers = [1, 2, 4, 5, 6, 67];
// aim:sum of all the numbers of the array
const sum = numbers.reduce((accumulator, currentvalue)=>{
    return accumulator + currentvalue;
}, 100)

console.log(sum);

// accumulator, currentvalue, return
//    1            2            3
//    3            3            6
//    6            4            10
//    10           5            15
//    15           10           25

   