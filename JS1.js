/*****Convert number to string*****/
// let age = 43;
// console.log(typeof 43);
// age = age + "";
// console.log(typeof age);
// let age = 34;
// age = String(age);
// console.log(typeof +age);

/*****Convert string to number*****/
// let marks = -"34";
// console.log(typeof(marks));
// let mark = +"4";
// console.log(typeof(mark));
// let marks = "34";
// marks = Number("34");
// console.log(typeof marks);

/*****String concatenation*****/
// let sname = "Paras";
// let lname = "Verma";
// let newName = sname + lname;
// console.log(newName);

// let num1 = "15";
// let num2 = "445";
// let add = +num1 + +num2;
// console.log(add);

/*****Template String*****/
let age = 23;
let name = "Paras";
// let about = "My name is " + name + " and my age is " + age;
let about = `My Name is ${name} and my age is ${age}`;
console.log(about);
