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
