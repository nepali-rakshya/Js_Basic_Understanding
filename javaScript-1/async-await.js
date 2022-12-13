async function names() {
  setTimeout(() => {
    // console.log("rakshya");
  }, 3000);
  return "done";
}

names().then((value) => {
  console.log(value);
});

// let name2 = new Promise((resolve, reject) => {
//   function name() {
//     // console.log("done");
//     setTimeout(() => {
//       resolve("hurrah");
//     }, 3000);
//   }
//   name();
// }).then((value) => {
//   console.log(value + " I am good ;)");
// });
