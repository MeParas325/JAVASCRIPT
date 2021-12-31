//nested destructuring
const users = [
    {userid:1, firstName:"Paras", gender:"Male"},
    {userid:2, firstName:"Tannu", gender:"female"},
    {userid:3, firstName:"bhakti", gender:"female"},
]

// const [user1, user2, user3] = users;
// console.log(user1);
// console.log(typeof user1);

// const [{firstName}, ,{gender}] = users;
const [{firstName:userFirstName, userid:useridd}, {userid} ,{gender}] = users;
console.log(userFirstName);
console.log(typeof userFirstName);
console.log(gender);
console.log(typeof gender);
console.log(userid);
console.log(useridd);
