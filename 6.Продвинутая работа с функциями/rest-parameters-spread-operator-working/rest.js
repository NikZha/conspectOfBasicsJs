function argumReturn(a, b, ...arg) {
    let retArg = {}
    retArg.array = arg;
    retArg.lenArray = arg.length
    retArg.sumAB = a+b
    return retArg
}
function args(){
    console.log(arguments);
    console.log(arguments.length)
}

console.log(argumReturn(1, 2, "a", 3))
args(1.22, 333, 55.44)