function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("drew...");
    },
  };
}

const circle = createCircle(1);
console.log(circle);
