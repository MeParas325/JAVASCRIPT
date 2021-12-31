//OBject destructuring
const obj = {
    bandName : "bidiBand",
    bandWidth : "5 ghz",
    year : "5",
    anotherFamousPerson : "Tanuja"
};

// const bandName = obj.bandName;
// const bandWidth = obj.bandWidth;
// console.log(bandName, " " ,bandWidth);

const{bandName, bandWidth, ...rest} = obj;
console.log(bandName, bandWidth);
console.log(rest);
console.log(typeof rest);