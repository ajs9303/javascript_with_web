const lunch = document.querySelector("#lunch");
const dinner = document.querySelector("#dinner");
const keyframes = [
  { opacity: 0, transform: "translateY(100%)" },
  { opacity: 1, transform: "translateY(0%)" },
];
const option = {
  duration: 1000,
  fill: "forwards",
};

const ob = new IntersectionObserver((targets, me) => {
  targets.forEach((v) => {
    if (v.isIntersecting) {
      v.target.animate(keyframes, option);
      me.unobserve(v.target);
    }
  });
});

ob.observe(lunch);
ob.observe(dinner);
