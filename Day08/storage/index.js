// localStorage.setItem("사탕연회비", "5천원");
// localStorage.getItem("사탕연회비");

const $ = (selector) => document.querySelector(selector);
const input = $("#input");
const save = $("#save");
const load = $("#load");

save.addEventListener("click", () => {
  const list = localStorage.getItem("candylist");
  if (list) localStorage.setItem("candylist", `${list}, ${input.value}`);
  else localStorage.setItem("candylist", input.value);
  input.value = "";
});

load.addEventListener("click", () => {
  console.log(localStorage.getItem("candylist"));
});
