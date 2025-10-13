const a = new Date();
console.log(`시 : ${a.getHours()}`);
console.log(`분 : ${a.getMinutes()}`);
console.log(`초 : ${a.getSeconds()}`);

// mini quiz
// 브라우저 화면에
// 현재시간 : ~시 ~분 ~초 나오게 하기

const newh1 = document.createElement("h1");
newh1.innerText = `현재시간 : ${a.getHours()}시 ${a.getMinutes()}분 ${a.getSeconds()}초`;
document.body.appendChild(newh1);

const newBtn = document.createElement("button");
newBtn.innerText = "시간 갱신";
newBtn.addEventListener("click", () => {
  const newTime = new Date();
  newh1.innerText = `현재시간 : ${newTime.getHours()}시 ${newTime.getMinutes()}분 ${newTime.getSeconds()}초`;
});
document.body.appendChild(newBtn);
