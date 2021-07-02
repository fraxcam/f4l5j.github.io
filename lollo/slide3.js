const slide3 = document.querySelector(".slide3");
const slide3Button = document.querySelector(".slide3-btn");

slide3Button.addEventListener("click", () => {
  slide3.classList.remove("active");
  localStorage.setItem("slide3BannerDisplayed", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("slide3BannerDisplayed")) {
    slide3.classList.add("active");
  }
}, 300);