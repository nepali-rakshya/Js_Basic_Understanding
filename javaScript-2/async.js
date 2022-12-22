console.log("first");

for (let i = 0; i <= 100; i++) {
  setTimeout(() => {
    console.log("second");
  }, 0);
}

console.log("third");
