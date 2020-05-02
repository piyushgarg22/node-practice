var rect = {
  perimeter: (x, y) => 2 * (x + y),
  area: (x, y) => x * y,
};

function solveRect(l, b) {
  console.log("solving for rectangle with l = " + l + " and b = " + b);

  if (l <= 0 || b <= 0) {
    console.log(
      "Rectangle dimesshiion should be greater than zero :l = " +
        l +
        " and b = " +
        b
    );
  } else {
    console.log("The area of the rectangle is  " + rect.area(l, b));
    console.log("The perimeter of the rectangle is  " + rect.perimeter(l, b));
  }
}



solveRect(2,4);
solveRect(3,14);
solveRect(7,0);
solveRect(9,8);