const updown = document.querySelector("#updown");
const nInput = document.querySelector("#input");
const bStart = document.querySelector("#start");
const bReset = document.querySelector("#reset");
const chance = document.querySelector("#chance");
const answer = Math.floor(Math.random() * 100) + 1;
console.log(`정답: ${answer}`);

const gameover = (isClear) => {
  bStart.disabled = true;
  nInput.disabled = true;
  chance.innerText = isClear
    ? "정답입니다❕💯"
    : `실패❕ 정답은 ${answer}입니다. RESET을 눌러 게임을 시작하세요!`;
};

bStart.addEventListener("click", () => {
  const { value } = nInput;
  const chanceCnt = +chance.innerText;
  const hasChance = chanceCnt != 0;

  if (answer == value) {
    gameover(true);
  } else {
    chance.innerText = chanceCnt - 1;
    updown.innerText = answer > value ? "UP🔼" : "DOWN🔽";
    !hasChance && gameover(false);
  }
});

bReset.addEventListener("click", () => {
  window.location.reload();
});
