import { elements, resultElements } from "./dom.js";
import { regexs } from "./util.js";

// 정규식 확인 후 색 변경
const change = (element, result) => {
  element.style.color = result ? "green" : "black";
};

// 정규식 체크 함수
const checkReg = (value, regexs, resultElements) => {
  let allPass = true; // 하나라도 안되면 false
  for (const reg in regexs) {
    const match = value.match(regexs[reg]);
    change(resultElements[reg], match);
    if (!match) allPass = false;
  }

  return allPass;
};

// 정규식 모두 통과 시 버튼 활성화
const checkAll = () => {
  const idCheck = checkReg(elements.id.value, regexs.id, resultElements.id);
  const pwdCheck = checkReg(elements.pwd.value, regexs.pwd, resultElements.pwd);
  const emailCheck = checkReg(
    elements.email.value,
    regexs.email,
    resultElements.email
  );

  elements.join.disabled = !(idCheck && pwdCheck && emailCheck);
};

elements.id.addEventListener("input", () => {
  checkAll();
});

elements.pwd.addEventListener("input", () => {
  checkAll();
});

elements.email.addEventListener("input", () => {
  checkAll();
});
