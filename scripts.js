var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(-2, 1500100900);
var triangle3Area = getTriangleArea(777, 333);

function getTriangleArea(a, h) {
  if(a > 0 && h > 0) {
   return a*h/2;
  }
  else{
   return 'Wrong numbers';
  }
}
console.log(triangle1Area, triangle2Area, triangle3Area);
