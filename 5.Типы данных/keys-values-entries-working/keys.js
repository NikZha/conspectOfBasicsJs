let obj = {
    name: "Ivan",
    age: 30
}
for (let [key, value] of Object.entries(obj)) console.log(`key: ${key} value: ${value}`)

let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
};

let doublePrices = Object.fromEntries(
    // преобразовать в массив, затем map, затем fromEntries (обратно в объект)
    Object.entries(prices).map(([key, value]) => [key, value * 2])
);

console.log(doublePrices.meat);