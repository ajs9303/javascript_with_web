const mainBtn = document.querySelector("#mainBtn");
const sidebar = document.querySelector("#sidebar");
const closeBtn = document.querySelector("#closeBtn");

mainBtn.addEventListener("click", () => {
  sidebar.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.add("hidden");
});
