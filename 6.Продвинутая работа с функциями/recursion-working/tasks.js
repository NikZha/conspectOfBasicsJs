/**
 * Task 1
 */


function sumToRecurshion(n) {
    if (n == 1) return 1
    else return n += sumToRecurshion(n - 1)
}

function sumToCicle(n) {
    let ex = 0;
    for (let i = 0; i <= n; i++) {
        ex += i
        // n-=1
    }
    return ex
}

function sumToByFormula(n) {
    return (1 + n) * n / 2
}
//console.log(sumToByFormula(n))

/**
 * Task 2
 */

function factByRec(n) {
    if (n == 1) return 1;
    else return n * factByRec(n - 1);
}


/**
 * Task 3
 */

function fib(n) {
    let arr = [1, 1]

    for (let i = 2; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[n - 1]
}

function fibByRec(n) {
    if(n == 0) return 0;
    if(n == 1) return 1;
    else return fibByRec(n-1) + fibByRec(n-2)
}

/**
 * Task 4
 */
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list){
    while (list != null) {
        console.log(list.value);
        list = list.next
    }
}

function printListRec(list){
    if(list == null) return;
    console.log(list.value);
    printListRec(list.next)
}

/**
 * Task 5
 */

function reversList(list) {
    let tmpObj =null
    while (list) {
        list.prev = tmpObj;
        tmpObj = list;
        list = list.next;
    }
    while (tmpObj) {
        console.log(tmpObj.value);
        tmpObj = tmpObj.prev
    }
}

function reversListRec(list){
    if(!list) return;
    reversList(list.next)
    console.log(list.value)
}

reversListRec(list)
console.log(list)