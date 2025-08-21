function fact(x) {
    return x == 1 ? 1 : x*fact(x-1) 
}

function cachingDecorator(func) {
  let cache = new Map();

  return function(x) {
    if (cache.has(x)) {    // если кеш содержит такой x,
      return cache.get(x); // читаем из него результат
    }

    let result = func(x); // иначе, вызываем функцию

    cache.set(x, result); // и кешируем (запоминаем) результат
    return result;
  };
}
fact = cachingDecorator(fact);


function fib(x) {
    if(x == 0) return 1;
    if(x==1) return 1;
    return fib(x-1)+fib(x-2)
}
//console.log(fib(77))