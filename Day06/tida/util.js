// 정규식 종류
export const regexs = {
  id: {
    string: /^[a-zA-Z0-9]+$/,
    length: /^.{6,20}$/,
  },
  pwd: {
    string: /[a-zA-Z]+/,
    number: /[0-9]+/,
    sign: /[!@$%^*_+~]+/,
    length: /^.{8,20}$/,
  },
  email: {
    form: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  },
};
