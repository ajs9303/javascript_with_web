const pass = document.querySelector("#pass");
const passOk = document.querySelector("#passOk");
const joinBtn = document.querySelector("#joinBtn");

passOk.addEventListener("input", () => {
  joinBtn.disabled = pass.value != passOk.value;
});
