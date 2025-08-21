let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
    let sorted = [];
    for(let str of arr) sorted.push(str)
    return sorted.sort();
}

let sorted = copySorted(arr);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (без изменений)
