/*
const a = /\d/; // 숫자도 포함
const b = /^\d$/; // 숫자 하나만
const c = /^\d+$/; // 숫자만

const d = /^[a-zA-Z]+$/; // 영어만
const e = /^[a-zA-Z0-9]+$/; // 영어 숫자만

const phoneReg = /^01[016879]-\d{4}-\d{4}$/; // 핸드폰 번호

const phone = document.querySelector("#phone");
phone.addEventListener("input", () => {
  const { value } = phone;
  console.log(phoneReg.test(value));
});

const birth = /^(\d{2})(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[0-1])$/;
*/

// element 종류
const elements = {
  id: document.querySelector("#id"),
  pwd: document.querySelector("#pwd"),
  email: document.querySelector("#email"),
  join: document.querySelector("#join"),
};

// 정규식 종류
const regs = {
  id: {
    string: /^[a-zA-Z0-9]+$/,
    length: /^[a-zA-Z0-9]{6,20}$/,
  },
  pwd: {
    string: /[a-zA-Z]+/,
    number: /[0-9]+/,
    sign: /[!@$%^*_+~]+/,
    length: /^[a-zA-Z0-9!@$%^*_+~]{8,20}$/,
  },
  email: {
    check: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  },
};

// 결과 나타낼 span
const resultElements = {
  id: {
    string: document.querySelector("#id_string"),
    length: document.querySelector("#id_length"),
  },
  pwd: {
    string: document.querySelector("#pwd_string"),
    number: document.querySelector("#pwd_number"),
    sign: document.querySelector("#pwd_sign"),
    length: document.querySelector("#pwd_length"),
  },
  email: {
    check: document.querySelector("#email_check"),
  },
};

// 정규식 확인 후 색 변경
const change = (element, result) => {
  element.style.color = result ? "green" : "black";
};

// 정규식 체크 함수
const checkReg = (value, regs, resultElements) => {
  let allPass = true; // 하나라도 안되면 false
  for (const reg in regs) {
    const match = value.match(regs[reg]);
    change(resultElements[reg], match);
    if (!match) allPass = false;
  }

  return allPass;
};

// 정규식 모두 통과 시 버튼 활성화
const checkAll = () => {
  const idCheck = checkReg(elements.id.value, regs.id, resultElements.id);
  const pwdCheck = checkReg(elements.pwd.value, regs.pwd, resultElements.pwd);
  const emailCheck = checkReg(
    elements.email.value,
    regs.email,
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
