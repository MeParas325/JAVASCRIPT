// Object inside array
//It is very useful in real world applocations
const users = [
    {userid:1, firstName:"Paras", gender:"Male"},
    {userid:2, firstName:"Tannu", gender:"female"},
    {userid:3, firstName:"bhakti", gender:"female"},
]
console.log(users);
for(let user of users){
    console.log(user.firstName);
}