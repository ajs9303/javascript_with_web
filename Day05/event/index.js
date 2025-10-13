const text = document.querySelector("#input");
const btn = document.querySelector("#btn");
const nSpan = document.querySelector("#span");

btn.addEventListener("click", () => {
  text.type = "password";
});

const max = 20;
text.maxLength = max;
text.addEventListener("input", (e) => {
  nSpan.innerText = `${e.target.value.length}/${max}`;
});
