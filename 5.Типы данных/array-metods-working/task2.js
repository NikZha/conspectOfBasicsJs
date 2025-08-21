let arr = [5, 3, 8, 1];
function filterRange(arr, a, b) {
    return arr.filter(item => a <= item && b >= item)
}

console.log(filterRange(arr, 2, 4)  + " " + arr)