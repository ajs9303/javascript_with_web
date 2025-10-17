// 라면 끓이기 프로그램
// 콘솔로 모든 과정 로그

// 1. 물 받기 (1~5초)
// 2. 물 끓이기 (5~8초)
// 3. 면과 스프 넣기 (1~3초)
// 4. 계란 넣기 (1~2초)
// 5. 라면 익히기 (5~10초)
// 6. 라면 완성
/*
const getRandomInt = (min, max) => {
  return (Math.floor(Math.random() * (max - min + 1)) + min) * 1000;
};

const watering = () =>
  new Promise((success, fail) => {
    console.log("물 받는 중");
    const time = getRandomInt(1, 5);
    setTimeout(() => {
      success(`물 받기 완료 ${time / 1000}초`);
    }, time);
  });

const waterBoiling = () =>
  new Promise((success, fail) => {
    console.log("물 끓이는 중");
    const time = getRandomInt(5, 8);
    setTimeout(() => {
      success(`물 끓이기 완료 ${time / 1000}초`);
    }, time);
  });

const putSoup = () =>
  new Promise((success, fail) => {
    console.log("면과 스프 넣는 중");
    const time = getRandomInt(1, 3);
    setInterval(() => {
      success(`면과 스프 넣기 완료 ${time / 1000}초`);
    }, time);
  });

const putEgg = () =>
  new Promise((success, fail) => {
    console.log("계란 넣는 중");
    const time = getRandomInt(1, 2);
    setInterval(() => {
      success(`계란 넣기 완료 ${time / 1000}초`);
    }, time);
  });

const ramenBoiling = () =>
  new Promise((success, fail) => {
    console.log("라면 익히는 중");
    const time = getRandomInt(5, 10);
    setInterval(() => {
      success(`라면 익히기 완료 ${time / 1000}초`);
    }, time);
  });

const completeRamen = () =>
  new Promise((success, fail) => {
    success("라면 완성");
  });

watering()
  .then((v) => {
    console.log(v);
    return waterBoiling();
  })
  .then((v) => {
    console.log(v);
    return putSoup();
  })
  .then((v) => {
    console.log(v);
    return putEgg();
  })
  .then((v) => {
    console.log(v);
    return ramenBoiling();
  })
  .then((v) => {
    console.log(v);
    return completeRamen();
  })
  .then((v) => {
    console.log(v);
  });
*/
