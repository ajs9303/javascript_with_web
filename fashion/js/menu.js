const menuOpen = document.querySelector("#menu-open");
const menuClose = document.querySelector("#menu-close");
const menuPanel = document.querySelector("#menu-panel");
const menuLi = document.querySelectorAll(".menu-list li");
const opt = { easing: "ease", fill: "forwards" };

menuOpen.addEventListener("click", () => {
  menuPanel.animate(
    [{ transform: "translateX(100%)" }, { transform: "translateX(0%)" }],
    { ...opt, duration: 1000 }
  );

  menuLi.forEach((v, i) => {
    v.animate(
      [
        { opacity: 0, transform: "translateX(30%)" },
        { opacity: 1, transform: "translateX(0%)" },
      ],
      {
        ...opt,
        duration: 500 * i,
      }
    );
  });
});

menuClose.addEventListener("click", () => {
  menuPanel.animate(
    [{ transform: "translateX(0%)" }, { transform: "translateX(100%)" }],
    { ...opt, duration: 300 }
  );
});
