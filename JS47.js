// Maps object
// map is an iterable

// const person = {
//     firstName:"Paras",
//     age:6,
//     1:"one"
// } 

// object literal
// key->String
// key->symbol

// console.log(person.firstName);
// console.log(person["firstName"]);
// console.log(person["1"]);

// for(let key in person){
//     console.log(key);
// }

// const person = new Map();
// person.set("firstName","Paras");
// person.set("age",20);
// console.log(person);
// person.set(1, "one");
// person.set([1, 2, 3], "onetwothree");
// person.set({1:"two"}, "onetwothree");
// console.log(person);
// console.log(person.get('firstName'));
// console.log(person.get(1));
// console.log(person.keys());
// for (let key of person.keys()){
//     console.log(key, typeof key);
// }
// for (let key of person){
//     console.log(key, typeof key);
//     console.log(Array.isArray(key));
// }
// for (let [key, value] of person){
//     console.log(key, value);
// }
// const person = new Map([["firstName", 'Paras'], ["lastName", "Verma"], ["Age", 6]]);
// console.log(person);

// const person1 = {
//     id:1,
//     name:"Paras",
// }

// const userInfo = new Map();
// userInfo.set(person1, {"age":3, "gender":"male"});
// console.log(userInfo);
// console.log(userInfo.get(person1));
// console.log(userInfo.get(person1).gender);

const obj = {
    "key1":"value1",
    "key2":"value2"
}
// const obj2 = obj;
const obj2 = Object.assign({}, obj);
console.log(obj);
console.log(obj2);
obj.key3 = "value3";
console.log(obj);
console.log(obj2);

