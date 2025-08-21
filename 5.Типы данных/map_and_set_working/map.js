/**
let obj = {
  name: "John",
  age: 30
};


let map = new Map();
map.set(obj, "1")

let keyObj = [...map.keys()][0]

console.log( keyObj );

let person1 = { name: "John" };
let person2 = { name: "Alice" };

//let map1 = new Map();
map.set(person1, "Данные Джона");
map.set(person2, "Данные Алисы");

// Получаем имя через объект-ключ
console.log([...map.keys()][0].name); // "John"

// Альтернативный перебор
for (let [key, value] of map) {
  console.log(`Ключ: ${key.name}, Значение: ${value}`);
}
  
  let prices = Object.fromEntries([
  ['banana', 1],
  ['orange', 2],
  ['meat', 4]
]);

let map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

//let obj = Object.fromEntries(prices);
let obj = Object.fromEntries(map.entries());
console.log(prices === obj) */
let obj = {
  name: "John",
  age: 30
};

let map = new Map(Object.entries(obj));
for(let [key, value] of map)
console.log(`key = ${key} & valeu = ${value}`)
/**
key = name & valeu = John
key = age & valeu = 30
 */