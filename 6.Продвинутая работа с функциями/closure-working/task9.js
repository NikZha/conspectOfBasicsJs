let users = [
  { name: "Иван", age: 20, surname: "Иванов" },
  { name: "Пётр", age: 18, surname: "Петров" },
  { name: "Анна", age: 19, surname: "Каренина" }
];

function byField(field) {  
     
    return function(a, b){        
        return a[field] > b[field] ? 1 : -1
    }    
}
let field = 'age'
console.log(users.sort(byField(field)))
const sym = Symbol(field) 
for(let user of users) console.log(user[field])