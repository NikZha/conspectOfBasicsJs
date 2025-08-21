let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];

let weakMap = new WeakMap()
for(let obj of messages) weakMap.set(obj, new Date);
messages.splice(0,1)
for (let index = 0; index < 200; index++) {
console.log(weakMap)    
    
}
console.log(weakMap)    
