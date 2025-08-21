let arr = [5, 2, 1, -10, 8];
function arrayDecrase(arr) {
   arr.sort(function(a, b){return b-a;}) 
}
arrayDecrase(arr)
console.log(arr)