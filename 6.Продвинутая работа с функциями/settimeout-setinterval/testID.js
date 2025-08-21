let timerId = setTimeout(() => alert('Do nothing'), 4000)
console.log(`Возвращённый номер таймера: ${timerId}`);
console.log(timerId)
clearTimeout(timerId);