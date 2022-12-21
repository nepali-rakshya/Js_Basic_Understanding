// question no 1

//

//

// valueAdded = spt.setAttribute(
//   "src",
//   "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
// );

async function loadFile() {
  let promise1 = new Promise((res, rej) => {
    let script = document.createElement("script");
    document.body.append(script);
    script.src =
      "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js";
    res(script);
  });
}

loadFile().then(alert("It has been loaded"));
