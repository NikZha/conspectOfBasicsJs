let john = {name: 'John'}
let weakMap = new WeakMap()
weakMap.set(john, "secret materials")
console.log(weakMap)
john = null
for (let index = 0; index < 200; index++) {
   console.log(weakMap)    
}
