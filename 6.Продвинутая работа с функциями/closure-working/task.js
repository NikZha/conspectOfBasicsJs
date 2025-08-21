let name = "John";

function sayHi() {
  console.log("Hi, " + name);
}

name = "Pete";

sayHi(); // что будет показано: "John" или "Pete"?

/**
 * Task 2 Pete
 */

function makeWorker() {
  let name = "Pete";

  return function() {
    console.log(name);
  };
}

name = "John";

// создаём функцию
let work = makeWorker();

// вызываем её
work(); // что будет показано?

/**
 * Task 3 counters is different
 */

function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

console.log( counter() ); // 0
console.log( counter() ); // 1

console.log( counter2() ); // ?
console.log( counter2() ); // ?
/**
 * Task 4
 */

function Counter() {
  let count = 0;

  this.up = function() {
    return ++count;
  };
  this.down = function() {
    return --count;
  };
}
counter = new Counter();

console.log( counter.up() ); // 1
console.log( counter.up() ); // 2
console.log( counter.down() ); // 1

/**
 * Task 7 https://learn.javascript.ru/closure#vidna-li-peremennaya
 */

let x = 1;

function func() {
  console.log(x); // ?

  let x = 2;
}

func(); //Ставлю на 1 -- Насамом деле ошибка Cannot access 'x' before initialization