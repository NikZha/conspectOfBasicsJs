function Timer(timeOut, flag) {

    this.timeOut = timeOut
    this.flag = flag;

    this.ex = 0

    this.setFlag = async function (flag) {
        this.flag = flag;

    }

    this.start = async function () {
         function abc() {

            for (let index = 0; index < this.timeOut; index++) {
                if (this.flag) break;
                setTimeout(() => {
                    this.ex++
                }, this.timeOut / 100);
            }
        }
        abc()
    }

}
let timer = new Timer(10000000000, true)

timer.start()
timer.setFlag(true)
console.log(timer.ex)

//intoF(10000, true);
//console.log(intoF(10000, false))



function f() {
    let value = Math.random();

    function g() {
        debugger; // в консоли: напишите alert(value); Такой переменной нет!
    }

    return g;
}

let g = f();
g();


let value = "Сюрприз!";

function f() {
    let value = "ближайшее значение";

    function g() {
        //       debugger; // в консоли: напишите alert(value); Сюрприз!
    }

    return g;
}

g = f();
g();


const sidsRemote = [[1,2,3], [1,2,3], [1,2,4]]
const sidsLocal = [1,2,3]
const sids = [...sidsRemote[0], ...sidsRemote[1], ...sidsRemote[2], ...sidsLocal].concat(...sidsRemote, sidsLocal)

function makeCounter() {
  let count = 0;

  return function() {
    return ++count; // есть доступ к внешней переменной "count"
  };
}

let count1 = makeCounter();
let count2 = makeCounter();
console.log(`1:${count1()},2:${count2()}`)