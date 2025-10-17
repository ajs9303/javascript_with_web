const time = document.querySelector("#time");
const start = document.querySelector("#start");

start.addEventListener("click", () => {
  let countDown = 5;

  let timer = setInterval(() => {
    countDown--;
    time.innerText = `🚀 발사 ${countDown}초 전`;
  }, 1000);

  setTimeout(() => {
    clearInterval(timer);
    time.innerText = "🔥🔥🔥🔥🔥";
  }, 5000);
});
