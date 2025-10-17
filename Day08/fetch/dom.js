const $ = (selector) => document.querySelector(selector);

export const elements = {
  main: $("#main"),

  koreaTime: $("#koreaTime"),
  selectCity: $("#selectCity"),
  cityTime: $("#cityTime"),
};

export const buttons = {
  bupyeong: $("#bupyeong"),
  tokyo: $("#tokyo"),
  losangeles: $("#losangeles"),
  london: $("#london"),
};
