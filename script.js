window.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector(".intro-video");
  if (video) {
    setTimeout(() => {
      video.style.transition = "opacity 1s ease";
      video.style.opacity = 0;
      setTimeout(() => video.remove(), 1000);
    }, 9000);
  }
});
