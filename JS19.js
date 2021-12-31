//how to iterate object
const person = {
    'name': "Tannu",
     age: 19,
    "person hobbies": ["Reading", "Space", "Listening music"]
};

//for in loop
//object.keys

for(let key in person){
    // console.log(person.key); // This is not good
    console.log(person[key]);
}

for(let key in person){
    console.log(key, person[key]);
    //Another way
    console.log(`${key}:${person[key]}`);
}

console.log(typeof Object.keys(person));
let value = Object.keys(person); //This will gove you an array
console.log(value);
let val = Array.isArray(Object.keys(person));
console.log(val);

for(let key of Object.keys(person)){
    console.log(key);
    console.log(person[key]);
}