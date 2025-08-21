let dateBefore = new Date().getTime()

for(let i = 0;i<10000;i++){
    console.log("HelloWorld")
}
let dateAfter = new Date().getTime()
console.log(`Время прошло: ${(dateAfter-dateBefore)/1000} секунд`)