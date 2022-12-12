let promise1 = new Promise((res, rej) => {
  setTimeout(() => {
    // console.log("done1");
    res("value1");
  }, 1000);
});
let promise2 = new Promise((res, rej) => {
  setTimeout(() => {
    // console.log("done2");
    res("value3");
  }, 2000);
});
let promise3 = new Promise((res, rej) => {
  setTimeout(() => {
    // console.log("done3");
    res("value3");
  }, 3000);
});

promise1.then(function () {
  console.log(promise1);
  console.log(promise2);
  console.log(promise3);
});
