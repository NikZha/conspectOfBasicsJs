let user = {
  name: 'John',
  age: 30
};

function count(user) {
    let sum = 0;
    for(let key of Object.keys(user)) sum++;
    return sum
}
console.log(count(user))