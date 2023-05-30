// prototype vs instance member

function Circle(radius){
   //instance member
   this.radius = radius;
   this.move = function(){
     // this.draw();
      console.log('move...');
   }
}

//prototype member
Circle.prototype.draw = function(){
   this.move();
   console.log('draw...');
}

const c1 = new Circle(1);
const c2 = new Circle(1);

console.log(c1.draw());

Circle.prototype.toString = function(){
   return 'circle with radius ' + this.radius;
}

console.log(c2.toString());