function addAll(a, b, c){
    sum = a + b + c;
    console.log(sum);
    console.log("\n");
}
addAll(2, 3, 5)

function addAll(a, b, c, ...arr){
    sum = a + b + c;
    for(let no of arr){
        sum = sum + no;
    }
    console.log(sum);
}
addAll(2, 3, 5, [3, 4, 6, 3])

