let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

function getNames(users){
    let arr = [];
    for(let user of users){
        arr.push(user.name)
    }
    return arr;
};

let names = getNames(users)

console.log(names)