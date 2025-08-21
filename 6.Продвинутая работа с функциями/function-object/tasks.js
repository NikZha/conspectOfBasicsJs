/**
 * 
 * Task 1
 */
function makeCounter() {

  function counter() {
    return count++;
  };

   counter.set = function(value){
    count = value
  }

   counter.decrease = function(){
   return count--
  }
  let count = 0;

  return counter;
}
//const value =3
//let counter =   makeCounter()
//console.log(counter())
//console.log(` устанавливаю значение счетчика  ${counter.set(value)}\n уменьшаю счетчик ${counter.decrease()}\nТекущий счет ${counter()}\n`)

/**
 * Task 2
 */

