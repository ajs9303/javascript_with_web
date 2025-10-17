/*
// 동물 6마리 랜덤 시간
const makeRandomTime = (min, max) =>
  (Math.floor(Math.random() * (max - min + 1)) + min) * 1000;

const animals = ["🐎", "🐇", "🐢", "🐔", "🐖", "🐄"];

const makeRace = (name) => {
  const time = makeRandomTime(1, 10);
  return new Promise((success) => {
    setTimeout(() => {
      success({ name, time });
    }, time);
  });
};

Promise.all(animals.map((v) => makeRace(v))).then((result) => {
  console.log(result);
});

const start = document.querySelector("#start");
start.addEventListener("click", () => {});
*/
