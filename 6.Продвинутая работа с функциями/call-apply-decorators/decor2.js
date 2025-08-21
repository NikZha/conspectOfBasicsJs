let worker = {
  slow(min, max){
    return max > min ? max : min;
  }
}

function cachingDecorator(func, hash1) {
  let cache = new Map();
  return function() {
    let key = hash1(arguments); // (*)
    if (cache.has(key)) {
      return cache.get(key);
    }

    let result = func.call(this, ...arguments); // (**)

    cache.set(key, result);
    return result;
  };
}

function hash(args) {
  return args[0] + ',' + args[1];
}

function hash1(args){
  return args.join(',') 
  
}

worker.slow = cachingDecorator(worker.slow, hash);

console.log( worker.slow(3, 5) ); // работает
console.log( "Again " + worker.slow(3, 5) ); // аналогично (из кеша)