const slide1 = document.querySelector(".slide1");
const slide1Button = document.querySelector(".slide1-btn");

slide1Button.addEventListener("click", () => {
  slide1.classList.remove("active");
  localStorage.setItem("slide1BannerDisplayed", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("slide1BannerDisplayed")) {
    slide1.classList.add("active");
  }
}, 300);