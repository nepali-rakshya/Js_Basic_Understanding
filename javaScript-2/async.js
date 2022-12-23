console.log("I wanna be first");

function first() {
  return new Promise((res) => {
    console.log("What is the temperature today: ");
    res("It is 12 degree Celcius");
  });
}
function first2() {
  console.log("What was the temperature today: ");
}

setTimeout(() => {
  console.log("Where do I exist");
}, 0);
console.log("I wanna be second");
first2();

first().then((response) => {
  return console.log(response);
});
