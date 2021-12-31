//Sets(It is iterable)
// Order is not guarenteed
// No index-based access
const set1 = new Set([1, 2, 3, 3]);
console.log(set1);
console.log(typeof set1);
console.log(set1[5]);

const set2 = new Set();
set2.add(1);
set2.add(2);
set2.add("3");
console.log(set2);
set2.add("items");
console.log(set2);
set2.add(["Item1", "Item2"]);
console.log(set2);
console.log(set2.has(1));
console.log(set2.has(["Item1", "Item2"]));

for(let item of set2){
    console.log(item);
}

const arr3 = [1, 2, 4, 5, 7, 8, 2, 1];
const uniqueElements = new Set(arr3);
let i = 0;
for (let item of uniqueElements){
    console.log(item);
    i++;
}
console.log("Length of arr3 is:"+arr3.length);
console.log("Length of uniqueElements is:"+i);