// // console.log("I wanna be first");

// // function first() {
// //   return new Promise((res) => {
// //     console.log("What is the temperature today: ");
// //     res("It is 12 degree Celcius");
// //   });
// // }
// // function first2() {
// //   console.log("What was the temperature today: ");
// // }

// // setTimeout(() => {
// //   console.log("Where do I exist");
// // }, 0);
// // console.log("I wanna be second");
// // first2();

// // first().then((response) => {
// //   return console.log(response);
// // });

// const uno = () => {
//   console.log("Hello I am uno");
// };

// function des() {
//   let promise = new Promise((res) => {
//     setTimeout(() => {
//       res("I am dos");
//     }, 2000);
//   });
//   return promise;
// }

// // function des() {
// //   let promise = new Promise((res) => {
// //     setTimeout(() => {
// //       res("I am dos");
// //     }, 2000);
// //   });
// //   return promise;
// // }

// const tros = () => {
//   console.log("I am tros");
// };

// async function desBro() {
//   try {
//     uno();
//     await des().then((value) => {
//       console.log(value);
//     });
//   } catch (error) {
//     console.log("There is an error " + error.message);
//   } finally {
//     console.log("We are done");
//   }
// }
// desBro();
// tros();

const delay = (duration) =>
  new Promise((resolve) => setTimeout(resolve, duration));

async function asyncWithAwait(prefix) {
  return new Promise((res) => {
    console.log(prefix + " before await");
    res(delay(10));
    console.log(prefix + " after await");
  });
}

async function asyncWithPromise(prefix) {
  console.log(prefix + " before promise");
  return delay(1000).then((_) => console.log(prefix + " after promise"));
}

async function run() {
  let prefix = "(1)";
  console.log(prefix + " with await");
  asyncWithAwait(prefix).then(() => console.log("done"));
  console.log(prefix + " with promise");
  await asyncWithPromise(prefix);
  console.log(prefix + " after all");
}

run();
