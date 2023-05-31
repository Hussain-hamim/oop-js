// iterating object properties 

function Circle(radius) {
  //instance member
  this.radius = radius;

  this.move = function () {
    console.log("move...");
  };
}

//prototype member
Circle.prototype.draw = function () {
  console.log("draw...");
};

const c1 = new Circle(1);

//object.keys() only return instance members.
console.log(Object.keys(c1));

//for-in loop return all member (instance + prototype).
for(let key in c1){
   console.log(key);
}

//checking for own property prototype is not own (instance) member
let che = c1.hasOwnProperty('draw');
let che1 = c1.hasOwnProperty('radius');
console.log(che);
console.log(che1);