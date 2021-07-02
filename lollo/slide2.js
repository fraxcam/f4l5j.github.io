const slide2 = document.querySelector(".slide2");
const slide2Button = document.querySelector(".slide2-btn");

slide2Button.addEventListener("click", () => {
  slide2.classList.remove("active");
  localStorage.setItem("slide2BannerDisplayed", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("slide2BannerDisplayed")) {
    slide2.classList.add("active");
  }
}, 300);