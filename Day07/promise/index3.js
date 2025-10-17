/*
const getRandomInt = (min, max) => {
  return (Math.floor(Math.random() * (max - min + 1)) + min) * 1000;
};

const menu = () =>
  new Promise((success, fail) => {
    const lunch = prompt("오늘의 점메추: ");
    const randomTime = getRandomInt(1, 10);
    setTimeout(() => {
      success(lunch);
    }, randomTime);
  });

const msg = () =>
  new Promise((success, fail) => {
    const randomTime = getRandomInt(1, 10);
    setTimeout(() => {
      success("맛점");
    }, randomTime);
  });

menu()
  .then((v) => {
    console.log(`오늘의 점심메뉴: ${v}`);
    return msg();
  })
  .then((v) => {
    console.log(v);
  });
*/
