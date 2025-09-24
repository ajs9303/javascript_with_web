const menu = document.querySelector("#menu");
const big = document.querySelector("#big");
const data = ["그림1.jpg", "그림2.jpg", "그림3.jpg", "그림4.jpg"];
big.src = data[0];

data.forEach((v) => {
  const li = document.createElement("li");
  const img = document.createElement("img");
  img.src = v;
  li.appendChild(img);

  //  눌렀을 때,
  li.addEventListener("click", () => {
    big.src = v;
  });

  // 마우스 들어갔을 때,
  li.addEventListener("mouseenter", () => {
    img.style.opacity = 0.7;
  });

  // 마우스 나갔을 때,
  li.addEventListener("mouseleave", () => {
    img.style.opacity = 1;
  });

  menu.appendChild(li);
});
