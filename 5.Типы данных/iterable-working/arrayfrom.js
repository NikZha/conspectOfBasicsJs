let arrayLike = {
  0: "Hello",
  1: "World",
  length: 2
};

let arr = Array.from(arrayLike); // (*)
console.log(arr.pop()); // World (метод работает)
 
let str = '𝒳😂';

// разбивает строку на массив её элементов
let chars = Array.from(str);


console.log(chars[0]); // 𝒳
console.log(chars[1]); // 😂
console.log(chars.length); // 2
console.log(str.split(''))