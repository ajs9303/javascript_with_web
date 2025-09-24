const data = [
  { title: "Home", sub: "Home is where the heart is..", color: "red" },
  { title: "News", sub: "Some news this fine day!", color: "green" },
  {
    title: "Contact",
    sub: "Get in touch, or swing by for a cup of coffee.",
    color: "blue",
  },
  { title: "About", sub: "Who we are and what we do.", color: "orange" },
];

const menu = document.querySelector("#menu");
const box = document.querySelector("#box");
const title = document.querySelector("#title");
const sub = document.querySelector("#sub");

data.forEach((v) => {
  const newLi = document.createElement("li");
  newLi.id = v.title;
  newLi.innerText = v.title;
  newLi.addEventListener("click", () => {
    title.innerText = v.title;
    sub.innerText = v.sub;
    newLi.style.backgroundColor = v.color;
    box.style.backgroundColor = v.color;
  });

  menu.appendChild(newLi);
});

// 함수로 온, 오프 작업 실행.
// 인덱스 컨트롤
