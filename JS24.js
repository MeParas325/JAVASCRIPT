//Functions
// function isEven(n){
//     if(n%2==0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(isEven(2));

//Return the first character of any string
// function str(str){
//     return str[0];
// }
// console.log(str("Paras"));

//Searching the element of an array
function arr(arr, n){
    for(let i = 0; i<arr.length; i++){
        if(n == arr[i]){
            return i;
        }
    }
    return "No not found";
}
console.log(arr([1, 2, 3, 11, 2], 11));