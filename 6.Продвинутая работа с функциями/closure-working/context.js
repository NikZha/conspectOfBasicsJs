let ex = 100
 
function f() {
    let value = ex*Math.random();

    return function () { console.log(Math.floor(value)); };
}

// 3 функции в массиве, каждая из которых ссылается на лексическое окружение
// из соответствующего вызова f()
let arr = [f(), f(), f()];
for(let fun of arr) fun();