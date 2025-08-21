let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

/**@type Array<string> */
function aclean(arr) {
    let cleanArr = []
    for (let i = 0; i < arr.length; i++) {
        let arrWord = Array.from(arr[i].toLowerCase())
        let setWord = new Set(arrWord)

        for (let j = i + 1; j < arr.length; j++) {
            if(setWord.size == 0) break;
            let arrWordj = Array.from(arr[j].toLowerCase())
            for (let k = 0; k < arrWordj.length; k++) if (!setWord.has(arrWordj[k])) { setWord.clear() }
        }
        if(setWord.size != 0) cleanArr.push(arr[i])
        if (i == (arr.length - 1)) cleanArr.push(arr[i])
    }
return cleanArr
}

let str = [
    ['z','a'],
    ['w', 'b']
]
console.log(str.sort())
aclean(arr)