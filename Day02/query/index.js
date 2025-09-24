const btnMinus = document.querySelector("#minus");
const spanNum = document.querySelector("#num");
const btnPlus = document.querySelector("#plus");

btnMinus.addEventListener("click", () => {
  spanNum.innerText = +spanNum.innerText - 1;
  if (+spanNum.innerText > 5) {
    btnMinus.classList.add("overFive");
    btnPlus.classList.add("overFive");
  } else {
    btnMinus.classList.remove("overFive");
    btnPlus.classList.remove("overFive");
  }
});
btnPlus.addEventListener("click", () => {
  spanNum.innerText = +spanNum.innerText + 1;
  if (+spanNum.innerText > 5) {
    btnMinus.classList.add("overFive");
    btnPlus.classList.add("overFive");
  } else {
    btnMinus.classList.remove("overFive");
    btnPlus.classList.remove("overFive");
  }
});
