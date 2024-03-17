function square(x, print) {
  print("Area of square is: ", x * x);
}
function rectangle(x, y, print) {
  print("Area of rectangle is: ", x * y);
}
function circle(r, print) {
  print("Area of circle is: ", 3.14 * r * r);
}
function print(shape, val) {
  console.log(shape, val);
}
square(4, print);
rectangle(2, 5, print);
circle(3, print);
