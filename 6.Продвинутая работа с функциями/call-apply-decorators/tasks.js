function work(a, b) {
    console.log(a + b); // произвольная функция или метод
}

function spy(func) {
    // Инициализируем массив calls ОДИН РАЗ при создании обёртки
    wrapper.calls = [];

    function wrapper() {
        let key = hash(arguments);
        wrapper.calls.push(key); // Добавляем в массив calls обёртки
        return func.apply(this, arguments);
    }

    return wrapper;
}

function hash(args) {
    return Array.from(args); // Преобразуем arguments в массив
}

work = spy(work);

//work(1, 2); // Выведет: 3
//work(4, 5); // Выведет: 9
/*
for (let args of work.calls) {
    console.log('call:' + args.join()); // "call:1,2", "call:4,5"
}
    */

/**
 * Task 2
 */

function f(x) {
    console.log( x);
}


function delay(func, del) {
    delay.delay = del

    return function (...args) {


        setTimeout(() => {
            let result = func.apply(this, args);
            return result;
        }, delay.delay)
    }
}

let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);
/*
f1000(1)
f1500(4)
*/