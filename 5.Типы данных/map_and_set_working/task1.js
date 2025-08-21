/**@type {Array<Number>} */
function unique(arr) {
  let set = new Set(arr);
  let uniqArr=[];
  for(let numb of set) uniqArr.push(numb)
    return uniqArr;
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(values) ); // Hare,Krishna,:-O