let arr = [5, 3, 8, 1];
function filterRangeInPlace(arr, a, b) {
    let arr1 = arr.filter(item => a <= item && b >= item)

    arr.splice(0, arr.length)
    arr1.forEach(element => {
        arr.push(element)
    });
    
}
function changeArray(arr) {
  arr = [1, 2, 3]; // Переприсваиваем переменную arr
}

const myArr = [0, 0];
changeArray(myArr);
console.log(myArr); //not WORK!

function mutateArray(arr) {
  arr.length = 0; // Мутируем переданный массив
  arr.push(1, 2, 3);
}


mutateArray(myArr);
console.log(myArr); // [1, 2, 3] (изменился!)