//hide the details only show the essential.
function Circle(radius){
    this.radius = radius;
this.defaultLocation = {x: 0, y: 0};
this.computeOptimumLocation = function(){
    console.log('compute method');
    //...
}

    this.draw = function(){
        this.computeOptimumLocation();

        console.log('draw');
    };
}

const circle = new Circle(10);

circle.draw();















