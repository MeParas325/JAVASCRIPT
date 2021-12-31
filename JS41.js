//every method
// const numbers = [2, 4, 6, 8];

// const ans = numbers.every((number)=>number%2==0);

// callback function --> true/false (boolean)

// every method --> true/false (boolean)
// console.log(ans);

const usercart = [
    {productId:1, productName:"Paras", price:200},
    {productId:2, productName:"Par", price:2000},
    {productId:3, productName:"Pars", price:20000},
]

const item = usercart.every((cartItem)=>cartItem.price < 20000);
console.log(item);