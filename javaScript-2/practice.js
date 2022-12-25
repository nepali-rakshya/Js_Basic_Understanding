// const v = 10;

// function test() {
//   const b = 2;
//   if (true) {
//     const b = 10;
//     console.log(b);
//   }
// }

// test();

// let a = 10;
// let b = "Hi";
// let c = [1, 2];
// let d = c;
// // d = [4, 5, 6];
// // d.unshift("3");

// console.log(`a = ${a}`);
// console.log(`b = ${b}`);
// console.log(`c = ${c}`);
// console.log(`d = ${d}`);
// console.log(`c === d ? ${c === d}`);
// console.log(`c == d ? ${c == d}`);
// console.log(c === d ? true : false);

// const c = [1, 2];
// console.log(c);

// function add(array, element) {
//   //   array.push(element);
//   array = [element];
//   console.log(array);
//   return array;
// }

// let value = add(c, 3);
// console.log(value);

// console.log(value === c ? true : false);

// Short Circuiting in Js

// function theSameOldFoo(name) {
//   name = name && "Bar";
//   console.log("My best firend's name is " + name);
// }

// theSameOldFoo();
// theSameOldFoo("Beau");

// function gfg() {
//   // AND short circuit
//   console.log(true && true);
//   console.log(true && false);
//   console.log(false && true);
//   console.log(false && false);
//   // OR short circuit
//   console.log(true || true);
//   console.log(true || false);
//   console.log(false || true);
//   console.log(false || false);
// }
// gfg();

// console.log(4 > 5 || console.log("i am here"));

let a = 5;
let b = a;
b = 6;
console.log(b);
