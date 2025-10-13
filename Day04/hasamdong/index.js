const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "vertical",
  loop: true,

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },

  mousewheel: {
    enabled: true,
  },

  keyboard: {
    enabled: true,
  },

  /*
  autoplay: {
    // delay: 5000,
  },
  */
});
