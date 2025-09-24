const btn = document.querySelector("#btn");
const screen = document.querySelector("#screen");

btn.addEventListener("click", () => {
  screen.classList.toggle("hidden");
});
