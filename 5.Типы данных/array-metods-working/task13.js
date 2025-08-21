let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById(users) {
let namedUsers = {};
for(let user of users){
    namedUsers[user.id] = user;
}    
    return namedUsers;
}

let usersById = groupById(users);
console.log(usersById)