/*
const makeDough = () =>
  new Promise((success, fail) => {
    // 도우 입력: 씬 or 크러스트 or 오리지널
    const dough = prompt("도우 입력: ");
    success(`${dough} 도우`);
  });

const makeTopping = () =>
  new Promise((success, fail) => {
    // 토핑 입력: 새우, 불고기, 포테이토
    const topping = prompt("토핑 입력: ");
    success(`${topping} 토핑`);
  });

const makeCheese = () =>
  new Promise((success, fail) => {
    // 치즈 입력: 모짜렐라, 체다, 슈레드
    const cheese = prompt("치즈 입력: ");
    success(`${cheese} 치즈`);
  });

const makeBaked = () =>
  new Promise((success, fail) => {
    success("굽기");
  });

const makePizza = () =>
  new Promise((success, fail) => {
    success(`피자 완성`);
  });

makeDough()
  .then((v) => {
    console.log(v);
    return makeTopping();
  })
  .then((v) => {
    console.log(v);
    return makeCheese();
  })
  .then((v) => {
    console.log(v);
    return makeBaked();
  })
  .then((v) => {
    console.log(v);
    return makePizza();
  })
  .then((v) => {
    console.log(v);
  });
*/
