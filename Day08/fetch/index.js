import { elements, buttons } from "./dom.js";
import { city } from "./util.js";

const APIKEY = "cc5429d48f5cd6575e31eca4ee1e58ee";

const timeFormat = (time) => {
  return String(time).padStart(2, "0");
};

const getCityTime = (city, timezone) => {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const time = new Date(utc + timezone * 1000);

  elements.selectCity.innerText = `${city} 시간: `;
  const hours = timeFormat(time.getHours());
  const minutes = timeFormat(time.getMinutes());
  elements.cityTime.innerText = `${hours}:${minutes}`;
};

// city = loc.city 로 들어와야 함
const getCity = (city) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=${APIKEY}`
  )
    .then((res) => res.json())
    .then((v) => {
      elements.main.style.backgroundImage = `url(images/${v.weather[0].main}.jpg)`;
      getCityTime(city.name, v.timezone);
    });
};

const now = new Date();
elements.koreaTime.innerText = `${timeFormat(now.getHours())}:${timeFormat(
  now.getMinutes()
)}`;
getCity(city.bupyeong);

buttons.bupyeong.addEventListener("click", () => {
  getCity(city.bupyeong);
});

buttons.tokyo.addEventListener("click", () => {
  getCity(city.tokyo);
});

buttons.losangeles.addEventListener("click", () => {
  getCity(city.losangeles);
});

buttons.london.addEventListener("click", () => {
  getCity(city.london);
});
