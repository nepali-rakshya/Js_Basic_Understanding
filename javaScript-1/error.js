try {
  let age = parseInt(prompt("Enter your age: "));
  if (age > 180) {
    throw new Error("Age invalid");
  } else {
    console.log("You are good");
  }
} catch (error) {
  console.log(error.stack);
}
