/**
 * 
 * 
Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

Сделайте два варианта решения.

Используя setInterval.
Используя рекурсивный setTimeout.
Я так понял нужно вывести числа от from до to включительно, в функцию передаются секунды.
Написал два варианта ф-ций, просьба сообщить правльно ли они работают, и что в них можно улучшить.
 */


function printNumbers(from, to){
    from*=1000
    to=to*1000+1100
    let nullTime = 0;
    let timerId = setInterval(() =>{
      if(nullTime>=from) console.log(`Lost ${(nullTime/1000)} seconds`)
        nullTime+=1000
        
    }, 1000)
    setTimeout(()=>clearInterval(timerId), to)
}


function printNumbers1(from, to){
    from*=1000
    to=to*1000+1100
    let nullTime = 0;
 let timerId = setTimeout(function tick(){
      if(nullTime>=from) console.log(`Lost ${(nullTime/1000)} seconds`);
        nullTime+=1000
       timerId = setTimeout(tick, 1000) 
    }, 1000)

   setTimeout(()=>clearInterval(timerId), to) 
}

function printNumbers2(from, to) {
  let current = from;

  let timerId = setInterval(function() {
    console.log(current);
    if (current == to) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
}

/**
 * Задача 2 
 */

let i = 0;

setTimeout(() => console.log(i), 100); // ?

// предположим, что время выполнения этой функции >100 мс
for(let j = 0; j < 100000000; j++) {
  i++;
}