let newDiv = document.createElement("div");
newDiv.className = "root";
let htmlBody = document.querySelector("body");
htmlBody.append(newDiv);

let newH = document.createElement("h1");
newH.textContent = "Hello there";
newH.className = "header";
newDiv.append(newH);
