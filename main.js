const shareBtn = document.querySelector(".share");
const shareIcon = document.querySelector(".share__image");

shareIcon.addEventListener("click", (e) => {
  if (e.target === shareIcon) {
    if (window.innerWidth <= 750) {
      shareBtn.classList.toggle("active__share__mobile");
      return;
    }
    shareBtn.classList.toggle("active__share__desktop");
  }
});
