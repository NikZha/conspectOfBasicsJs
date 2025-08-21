function testNullDelay() {
    let timerId = setTimeout(() => console.log("МИР"))
    for (let index = 0; index < 10050; index++) {
        console.log("test") //иммитация бурной деятельности

    }
    console.log("Привет")
   // clearTimeout(timerId)
}  
testNullDelay()