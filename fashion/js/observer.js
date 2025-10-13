const fKeyframes = [
  { opacity: 0, transform: "translateY(20%)" },
  { opacity: 1, transform: "translateY(0%)" },
];
const fOption = { duration: 1000, easing: "ease", fill: "forwards" };

const ob = new IntersectionObserver(
  (entries, ob) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.animate(fKeyframes, fOption);
        ob.unobserve(entry.target);
      }
    });
  },
  {
    root: null,
    rootMargin: "0px 0px -20% 0px",
    threshold: 0,
  }
);

const data = document.querySelectorAll(".fadein");
data.forEach((v) => ob.observe(v));
