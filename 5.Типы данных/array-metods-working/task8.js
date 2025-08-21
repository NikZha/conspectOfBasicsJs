let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

function getSurname(users){
let arr=[];

let len = users.length
for(let i=0;i<len;i++){
    let obj={
    id: "", fullName: ""
};
    let fullName = users[i].name + " " + users[i].surname;
    obj.id = users[i].id;
    obj.fullName = fullName;
    arr.push(obj)
}
return arr;
};

let usersMapped = getSurname(users)
console.log(`id = ${usersMapped[0].id} and fullname = ${usersMapped[0].fullName}`)