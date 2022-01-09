const obj1 = {
    key1 : "value1",
    key2 : "value2"
}

// const obj2 = {}
const obj2 = Object.create(obj1);
console.log(obj2);

obj2.key3 = "value3";
obj2.key2 = "uniqueelement";
console.log(obj2.key2);
// console.log(obj2.key1); //undefined /*we dont want to show undefined

console.log(obj2.__proto__);
