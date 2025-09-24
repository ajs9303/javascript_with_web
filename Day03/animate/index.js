const heading = document.querySelector("#heading");

const keyframes = [
  { opacity: 0, transform: "translateY(100%)" }, // 시작
  { opacity: 1, transform: "translateY(0%)" }, // 끝
];

const option = {
  duration: 2000,
  fill: "forwards",
};

heading.animate(keyframes, option);
