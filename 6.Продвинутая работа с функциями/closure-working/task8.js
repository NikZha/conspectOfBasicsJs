/* .. ваш код для inBetween и inArray */
let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a, b){
    return function(item){
       return b >= item && a <= item;
    }
}



function inArray(arr){
    return function(item){
        let set = new Set(arr); //не знал что есть arr.includes(item)
        if(set.has(item)) return true;
        else return false;
    }
}
//console.log( arr.filter(inBetween(3, 6)) );
console.log(arr.filter(inArray([1, 2, 10])))