
setTimeout( function () {
  console.log("timer");
}, 5000);

function x(y) {
  console.log("x");
  y();
}

x(function y() {
  console.log("y");
});



document.getElementById("mode").addEventListener("click", function xyz() {
  console.log("Button Clicked");
});

// if any operations block the call stack that is called blocking the main thread.
