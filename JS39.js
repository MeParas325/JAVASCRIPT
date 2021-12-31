// price lowtohigh HightoLow
const products = [{
    productId : 1,
    productName : "p1",
    price : 22300
}, {
    productId : 2,
    productName : "p2",
    price : 30
}, {
    productId : 3,
    productName : "p3",
    price : 300
}, {
    productId : 4,
    productName : "p4",
    price : 1300
}, {
    productId : 5,
    productName : "p5",
    price : 3009
}];

// lowHigh
const lowToHigh = products.slice(0).sort((a, b)=>{
    return a.price - b.price;
})
console.log(products);