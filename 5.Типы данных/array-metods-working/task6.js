let str = "3 + 7"

function Calculator() {
    let funcs = [];
    this.addMethod = function(operator, func){
        funcs.push({operator, func});
    }
 this.calculate =  function(str) {
        let arr = str.split(' ')
        let a = arr[0];
        let b = arr[2];
        for (let index = 0; index < funcs.length; index++) {
            if(arr[1] == funcs[index].operator) return funcs[index].func(+a, +b);            
        }
        if(arr[1]=='+') return +a + +b;
        if(arr[1]=='-') return +a - +b;
        console.log(`I dont now wat is that mean ${str}`)
    }
}

function Calculator1() {
  this.operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b
  };

  this.addMethod = function(operator, func) {
    this.operations[operator] = func;
  };

  this.calculate = function(str) {
    const [a, op, b] = str.split(' ');
    
    if (!this.operations[op]) {
      console.log(`Unknown operator: "${op}"`);
      return NaN;
    }
    
    return this.operations[op](+a, +b);
  };
}

let powerCalc = new Calculator1;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("**", (a, b) => a ** b);
let result = powerCalc.calculate("2 * 3");
console.log(result)