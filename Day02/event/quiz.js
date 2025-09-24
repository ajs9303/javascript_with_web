const btnMinus = document.createElement("button");
const newSpan = document.createElement("span");
const btnPlus = document.createElement("button");

btnMinus.innerText = "-";
newSpan.innerText = "0";
btnPlus.innerText = "+";

btnMinus.addEventListener("click", () => {
  newSpan.innerText = +newSpan.innerText > 0 ? +newSpan.innerText - 1 : 0;
  newSpan.style.color = +newSpan.innerText > 10 ? "blue" : "black";
});

btnPlus.addEventListener("click", () => {
  newSpan.innerText = +newSpan.innerText + 1;
  newSpan.style.color = +newSpan.innerText > 10 ? "blue" : "black";
});

document.body.appendChild(btnMinus);
document.body.appendChild(newSpan);
document.body.appendChild(btnPlus);
