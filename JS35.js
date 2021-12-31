// important array methods

const numbers = [3, 5, 2, 6];

// function multi2(number, index){
//     console.log(`Index is:${index}, Number in index ${index} is:${number}`);
//     console.log(`${number}*2=${number*2}`);
// }
// numbers.forEach(multi2);
numbers.forEach(function(number, index){
    console.log(`Index is:${index}, Number in index ${index} is:${number}`);
    console.log(`${number}*2=${number*2}`);
});

const users = [{firstName:"Paras"}, {firstName:"Tanuja"}, {firstName:"Kartik"}, {firstName:"Riya"}]
users.forEach(function(name){
    console.log(name.firstName);
})