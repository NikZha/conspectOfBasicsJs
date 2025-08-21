function sayHi(name) {
    alert(`Hi, ${name}`)
}

function sayBye(name) {
    alert(`Bye, ${name}`)
}
export default function(){
    alert('Эспортируемая ф-ция по умолчанию')
}

export {sayBye, sayHi};