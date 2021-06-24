const alcolContainer = document.querySelector(".alcol-container");
const alcolButton = document.querySelector(".alcol-btn");

alcolButton.addEventListener("click", () => {
  alcolContainer.classList.remove("active");
  localStorage.setItem("alcolBannerDisplayed", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("alcolBannerDisplayed")) {
    alcolContainer.classList.add("active");
  }
}, 2000);