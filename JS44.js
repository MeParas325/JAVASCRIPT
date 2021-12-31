const myarr = ["Item1", "Item2", "Item3", "Item4"];
//delete
const del = myarr.splice(1, 2);
console.log(del);
console.log(myarr);

//insert
myarr.splice(1, 0, "InsertedItem");
console.log(myarr);

//insert and delete together
const myarr2 = ["Item1", "Item2", "Item3", "Item4", "Item5"];
const item2 = myarr2.splice(2, 3, "InsertedItem1", "InsertedItem2");
console.log("Deleted Items are:"+item2);
const myarr3 = new Array(item2);
console.log("New arra is:"+myarr3);
console.log(myarr2);
