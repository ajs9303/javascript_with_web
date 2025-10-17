const time = document.querySelector("#time");

setInterval(() => {
  const now = new Date().toLocaleTimeString();
  time.innerText = now;
}, 1000);
