import { colors, newSection } from "./query.js";
import { keyframes, option } from "./animation.js";

colors.forEach((v, i) => {
  const newDiv = document.createElement("div");
  newDiv.style.backgroundColor = v;
  newDiv.animate(keyframes, { ...option, delay: 500 * i });

  newSection.appendChild(newDiv);
});
