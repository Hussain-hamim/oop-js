//property attribute

let person = {name: 'hussain'};

Object.defineProperty(person, 'name', {
   writable: false,
   enumerable: true,
   configurable: false
});
delete person.name

console.log(person);