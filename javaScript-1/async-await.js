// async function names() {
//   setTimeout(() => {
//     // console.log("rakshya");
//   }, 3000);
//   return "done";
// }

// names().then((value) => {
//   console.log(value);
// });

// // let name2 = new Promise((resolve, reject) => {
// //   function name() {
// //     // console.log("done");
// //     setTimeout(() => {
// //       resolve("hurrah");
// //     }, 3000);
// //   }
// //   name();
// // }).then((value) => {
// //   console.log(value + " I am good ;)");
// // });

// console.log(`synchronous code`);

// setTimeout(() => {
//   console.log(`tomato`);
// }, 0);

// Promise.resolve().then(() => console.log(`pineapple`));

// console.log(`synchronous code 2`);

let promises = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("I am 3 sec");
    // resolve("value 3");
  }, 3000);
  setTimeout(() => {
    console.log("I am 2 sec");
    // resolve("value 2");
  }, 2000);
  setTimeout(() => {
    console.log("I am 1 sec");
    resolve("value 1");
  }, 1000);
})
  .then((value) => {
    console.log(value);
    return value;
  })
  .then((value2) => {
    setTimeout(() => {
      console.log(`I am ${value2}`);
    }, 2000);
  });

// console.log(promises);

// async function atatime() {
//   setTimeout(() => {
//     console.log("I am 3 sec");
//   }, 3000);
//   setTimeout(() => {
//     console.log("I am 2 sec");
//   }, 2000);
//   setTimeout(() => {
//     console.log("I am 1 sec");
//   }, 1000);
// }

// atatime();
