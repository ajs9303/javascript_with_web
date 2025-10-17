const makeDough = (next) => {
  console.log("도우 만들기");
  next();
};

const makeTomato = (next) => {
  console.log("토마토 소스 바르기");
  next();
};

const makeCheese = (next) => {
  console.log("치즈 뿌리기");
  next();
};

const makeBaked = (next) => {
  console.log("피자 굽기");
  next();
};

const makePizza = (next) => {
  console.log("피자 완성");
  next();
};

const makePacked = () => {
  console.log("피자 포장");
};

makeDough(() => {
  makeTomato(() => {
    makeCheese(() => {
      makeBaked(() => {
        makePizza(() => {
          makePacked();
        });
      });
    });
  });
});
