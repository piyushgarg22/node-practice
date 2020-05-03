var rect = require("./reactangle");
function solveRect(l, b) {
  console.log("solving for rectangle with l = " + l + " and b = " + b);
  rect(l, b, (err, rectangle) => {
    if (err) {
      console.log("Error : " + err.message);
    } else {
      console.log("The Area of the rectangle of dimension a = " + l + "and b = " + b + " is " + rectangle.area)
    }
  });

  console.log("test")
}

solveRect(2, 4);
solveRect(3, 14);
solveRect(7, 0);
solveRect(9, 8);
