///-----------------counter or stopwatch----------------------------


function Stopwatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  this.start = function () {
    if (running) throw new Error("Stopwatch has already started.");

    running = true;

    startTime = new Date();
      // document.getElementById("p").innerHTML = "counter: " + startTime.getSeconds();

  };

  this.stop = function () {
    if (!running) throw new Error("Stopwatch is not started.");

    running = false;

    endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };

  this.reset = function () {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
    document.getElementById("p").innerText = "counter: ";
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
};

function dur(){

   document.getElementById('p').innerText ="counter: "+ sw.duration;
}

const sw = new Stopwatch();