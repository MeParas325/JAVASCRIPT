// Some method
const numbers = [2, 4, 5, 8];
const ans = numbers.some((number)=>number%2 == 0);
console.log(ans);

// console.log(ans);

const usercart = [
    {productId:1, productName:"Paras", price:200},
    {productId:2, productName:"Par", price:2000},
    {productId:3, productName:"Pars", price:20000},
    {productId:4, productName:"Mac", price:200000}
]

const item = usercart.some((item)=>item.price>100000)
console.log(item);