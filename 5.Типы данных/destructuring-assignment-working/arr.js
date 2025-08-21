let arr = ["иван", "иванов"]
let [name, surname] = arr;
console.log(`name = ${name} surname = ${surname} arr = ${arr}`)

/**
 * Exemple with ...variable
 */
let [name1, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log(`name1 - ${name1} and array rest: ${rest}`)

/**
 * default naming
 */
let [firstName, surnam] = [];
console.log(`${firstName} ${surnam}`)