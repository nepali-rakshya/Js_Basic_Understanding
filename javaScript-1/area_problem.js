const radius = [3, 1, 2, 4];

//          one way to find the values using MAP

let area = radius.map(function (r) {
  let value = Math.PI * r * r;
  return value;
});
let circumference = radius.map(function (r) {
  let value = 2 * Math.PI * r;
  return value;
});

let diameter = radius.map(function (r) {
  let value = 2 * r;
  return value;
});

console.log(area);
console.log(circumference);
console.log(diameter);
