const runners = [
  { element: document.getElementById("runner1"), time: 5000 },
  { element: document.getElementById("runner2"), time: 6000 },
  { element: document.getElementById("runner3"), time: 7000 },
];

runners.forEach((runner) => {
  // 화면 너비 100% 기준 left 이동
  const trackWidth = document.getElementById("track").offsetWidth;

  // setTimeout + transition으로 이동
  runner.element.style.transitionDuration = `${runner.time}ms`;
  setTimeout(() => {
    runner.element.style.left = `${trackWidth - 50}px`; // -50px로 아이콘 안 잘리게
  }, 0);
});
