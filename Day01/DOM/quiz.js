// 유저에게 태그와 내용을 프롬프트 한번에 입력 받고
// 올바른 태그를 넣으면 태그와 내용 만들기
// ex) div 김치찌개 -> <div>김치찌개</div>

/*
const q1 = prompt("태그 내용").split(" ");
// const [tag, contents] = prompt("태그 내용").split(" ");
const a1 = document.createElement(q1[0]);
a1.innerText = q1[1];
document.body.appendChild(a1);
*/

// 유저에게 내용을 입력 받아
// 내용들을 button 태그로 만들어서 나타내기
// ex)김치 순대 떡볶이 사탕
// 김치, 순대, 떡볶이, 사탕 버튼

const q2 = prompt("버튼 내용").split(" ");
q2.forEach((v) => {
  const btn = document.createElement("button");
  btn.innerText = v;
  document.body.appendChild(btn);
});
