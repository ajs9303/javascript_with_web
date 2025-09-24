const chk = document.querySelector("#chk");
const btn = document.querySelector("#btn");

chk.addEventListener("click", () => {
  btn.disabled = !chk.checked;
});
