let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  place: room // meetup ссылается на room
};

room.occupiedBy = meetup; // room ссылается на meetup

console.log( JSON.stringify(meetup, function replacer(key, value) {
  console.log(`${key}: ${value}`);
  return (key == 'occupiedBy') ? undefined : value;
}));

let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

 meetup = JSON.parse(str);

// console.log(meetup.date.getDate()) //Ошибка так как дата в текстовом формате

meetup = JSON.parse(str, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});

console.log(meetup.date.getDate())