let obj = {
    name: "Peter",
    age: 30,
    isAdmin: true,
    courses: ['html', 'css', 'js'],
    wife: null
}

let str = JSON.stringify(obj);

//console.log(`type str: ${typeof str}\n type obj: ${typeof obj}\n str is: ${str}`)

let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: ["john", "ann"]
};

meetup.place = Object.fromEntries(Object.entries(room));       // meetup ссылается на room
room.occupiedBy = meetup; // room ссылается на meetup



let json = JSON.stringify(meetup); // Ошибка: Преобразование цикличной структуры в JSON
let objFromJson = JSON.parse(json)
console.log(objFromJson)