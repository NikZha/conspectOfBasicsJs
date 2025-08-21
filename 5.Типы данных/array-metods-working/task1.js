let str = "-background-color-"
function camelize(str) {
    let strCamale = "";
    let bl = false;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '-') {
            bl = true;
        } else if (bl) {
            strCamale += str[i].toUpperCase();
            bl = false;
        } else if (!bl) {
            strCamale += str[i];
        }
    }
    return strCamale;
}
function camelize1(str) {
  const words = str.split('-');
  let result = words[0]; // Первое слово без изменений

  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    if (word === '') continue; // Пропускаем пустые строки (если есть "--")
    result += word[0].toUpperCase() + word.slice(1);
  }

  return result;
}
function camelize2(str) {
  return str
    .split('-')
    .map((word, index) => 
      index === 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join('');
}
let len1 = camelize(str).length
let len2 = camelize2(str).length
console.log(`len1 = ${len1} and len2 = ${len2}`)