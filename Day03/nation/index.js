const data = [
  { nation: "England", capital: "London" },
  { nation: "France", capital: "Paris" },
  { nation: "Japan", capital: "Tokyo" },
];

const ulMenu = document.querySelector("#menu");
const h3Capital = document.querySelector("#capital");
const pDesc = document.querySelector("#desc");

data.forEach((v) => {
  const newLi = document.createElement("li");
  newLi.innerText = v.capital;
  newLi.id = v.capital;

  newLi.addEventListener("click", () => {
    h3Capital.innerText = v.capital;
    pDesc.innerText = `${v.capital} is the capital city of ${v.nation}`;
  });
  ulMenu.appendChild(newLi);
});
