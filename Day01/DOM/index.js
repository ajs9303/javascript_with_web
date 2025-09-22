// 자바스크립트로 버튼 만들기
// 기본 타입: 5개
// 참조 타입: arr, obj, func, Document[html], Element[tag]
const btn = document.createElement("button");
btn.innerText = "월요일 ㅅㄱ";
btn.style.color = "red";
document.body.appendChild(btn);

// div 태그로 내일은 화요일이다. 만들기
const div = document.createElement("div");
div.innerText = "내일은 화요일";
document.body.appendChild(div);

// a 태그 만들고 쿠팡 이동 만들기
const a = document.createElement("a");
a.innerText = "쿠팡 이동";
a.href = "https://www.coupang.com";
document.body.appendChild(a);
