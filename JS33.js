//Callback functions
function myFunc(callback){
    console.log("HEllo world");
    callback("Paras");

}
myFunc(myFunc2);

function myFunc2(name){
    console.log(name);
}