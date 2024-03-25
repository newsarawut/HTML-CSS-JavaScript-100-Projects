// images
const images = document.querySelectorAll("img");
// wrapper
const wrapper = document.getElementById("wrapper");
// imgWrapper
const imgWrapper = document.getElementById("fullImg");
// close
const close = document.querySelector("span");

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    openModal(`images/img${index}.jpg`);
  });
});

close.addEventListener("click", () => {
  wrapper.style.display = "none";
});

function openModal(pic) {
  wrapper.style.display = "flex";
  imgWrapper.src = pic;
}
