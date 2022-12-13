let promise1 = new Promise((res, rej) => {
  setTimeout(() => {
    // console.log("done1");
    rej("value1");
  }, 1000);
});
let promise2 = new Promise((res, rej) => {
  setTimeout(() => {
    // console.log("done2");
    rej("value2");
  }, 2000);
});

let promise3 = new Promise((res, rej) => {
  setTimeout(() => {
    // console.log("done3");
    rej("value3");
  }, 3000);
});

// promise1.then(function () {
//   console.log(promise1);
//   console.log(promise2);
//   console.log(promise3);
// });

let allPromises = Promise.any([promise1, promise2, promise3]);
allPromises.then(console.log);
