// const btn = document.createElement("button");
// btn.innerText = "테스트";
// btn.addEventListener("click", () => {
//   alert("test");
// });
// document.body.appendChild(btn);

// div 태그 만들고, 내용은 점메추
// 클릭하면 콘솔로그로 오늘의 점심메뉴는 마라탕 입니다. 출력
// const newDiv = document.createElement("div");
// newDiv.innerText = "점메추";
// newDiv.addEventListener("click", () => {
//   console.log("오늘 점심은 마라탕");
// });
// document.body.appendChild(newDiv);

// 버튼 태그, 내용은 콜라
// 버튼 누를시 사이다로 변경
// const btn = document.createElement("button");
// btn.innerText = "콜라";
// btn.addEventListener("click", () => {
//   btn.innerText = "사이다";
// });
// document.body.appendChild(btn);

// 버튼 만들고, 😶 <-> 😍 왔다갔다
// const btn = document.createElement("button");
// btn.innerText = "😶";
// btn.addEventListener("click", () => {
//   btn.innerText = btn.innerText == "😶" ? "😍" : "😶";
// });
// document.body.appendChild(btn);

const btn = document.createElement("button");
btn.innerText = "✔";
btn.style.backgroundColor = "white";
btn.addEventListener("click", () => {
  btn.style.backgroundColor =
    btn.style.backgroundColor == "white" ? "blue" : "white";
});
document.body.appendChild(btn);
