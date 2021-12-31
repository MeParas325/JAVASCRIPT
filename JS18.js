// difference between dot and bracket notation
const key = 'email'
const person = {
    'name': "Tannu",
     age: 19,
    "person hobbies": ["Reading", "Space", "Listening music"]
};

person["person hobbies"].push("Singing");
console.log(person["person hobbies"]);
person[key] = "parasverma0527@gmail.com";
console.log(person);