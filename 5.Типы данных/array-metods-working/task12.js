function unique(arr) {
    let hashTable = {}
    for (let uniq of arr) {
        if (!hashTable[uniq]) {
            hashTable[uniq] = uniq
        }
    }
    let uniqArr = []
    for (let uniq in hashTable) uniqArr.push(uniq)
    return uniqArr;
}

function unique1(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];
console.log(unique1(strings));