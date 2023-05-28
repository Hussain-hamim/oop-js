//adding or removing properties to object
//adding: dot notation and bracket notation
//removing: delete keyword

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(10);

//dot notation
circle.location = { x: "Afg" };

//bracket notation
circle["add"] = { y: "khost" };

//removing
delete circle["add"];
