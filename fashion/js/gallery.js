const album = [
  "img1",
  "img2",
  "img3",
  "img4",
  "img5",
  "img6",
  "img7",
  "img8",
  "img9",
];
const galleryThumbnails = document.querySelector(".gallery-thumbnails");
const galleryImage = document.querySelector(".gallery-image img");

album.forEach((v) => {
  const newLi = document.createElement("li");
  const newSrc = `img/${v}.jpg`;
  newLi.className = "fadein";

  const newImg = document.createElement("img");
  newImg.src = newSrc;

  newLi.addEventListener("click", () => {
    galleryImage.src = newSrc;
  });

  newLi.appendChild(newImg);
  galleryThumbnails.appendChild(newLi);
});
