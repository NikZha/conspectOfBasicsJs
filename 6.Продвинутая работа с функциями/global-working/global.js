for(let i=0;i<2;i++)
console.log(globalThis) ;

let num = Number(45)
let double = Number(45.34)
let nan = NaN
console.log(`${typeof num} ${typeof double} ${typeof nan}`)
import is from 'is';
console.log(`${is.number( num)} ${is.number( double)} ${is.number( nan)}`)