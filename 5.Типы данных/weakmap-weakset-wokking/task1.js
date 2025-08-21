let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];
let weakSet = new WeakSet(messages)
messages[0] = null
console.log(`messages = ${messages} & weakSet = ${weakSet}`)
for (let index = 0; index < 200; index++) {
    console.log(weakSet)
    
}
