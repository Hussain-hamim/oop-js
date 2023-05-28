//enumrating though object
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(10);

//to get key in the object
for (let key in circle) {
  console.log(key);
}

//to get key value in the object we use the bracket notation
for (let key in circle) {
  console.log(key, circle[key]);
}

//another to access key in object
const keys = Object.keys(circle);
console.log(keys);

//check for existing a property in an object we use (if - in)
if('radius' in circle){
    console.log('circle has a radius');
}

