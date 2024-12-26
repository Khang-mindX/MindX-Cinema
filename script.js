const navbar = document.querySelector("nav");
// keo xuong - doi background cho nav
window.addEventListener("scroll", () => {
  // Check the scroll position
  if (window.scrollY > 50) {
    // Change '50' to the scroll height you want
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});