const animate = [
  {
    tag: document.querySelector("#loading"),
    kf: [{ opaicity: 1 }, { opacity: 0, display: "none" }],
    dur: { duration: 500, delay: 2000, easing: "ease", fill: "forwards" },
  },
  {
    tag: document.querySelector("#loading-screen"),
    kf: [
      { transform: "translateY(100%)" },
      { transform: "translateY(0%)" },
      { transform: "translateY(-100%)" },
    ],
    dur: { duration: 1000, delay: 2000, easing: "ease", fill: "forwards" },
  },
];

export const loadScreen = () => {
  animate.forEach((v) => {
    const anim = v.tag.animate(v.kf, v.dur);
    anim.onfinish = () => {
      v.tag.style.display = "none";
    };
  });
};
