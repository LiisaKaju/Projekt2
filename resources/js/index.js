const header = document.querySelector(".navigation");
const toggleClass = "is-visible";

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  if (currentScroll > 0) {
    header.classList.add(toggleClass);
  } else {
    header.classList.remove(toggleClass);
  }
});
