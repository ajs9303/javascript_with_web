const $ = (selector) => document.querySelector(selector);

// element 종류
export const elements = {
  id: $("#id"),
  pwd: $("#pwd"),
  email: $("#email"),
  join: $("#join"),
};

// 결과 나타낼 span
export const resultElements = {
  id: {
    string: $("#id_string"),
    length: $("#id_length"),
  },
  pwd: {
    string: $("#pwd_string"),
    number: $("#pwd_number"),
    sign: $("#pwd_sign"),
    length: $("#pwd_length"),
  },
  email: {
    form: $("#email_check"),
  },
};
