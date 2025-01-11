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

async function fetchFilms() {
  try {
    const apiURL = "https://www.omdbapi.com/?i=tt3896198&apikey=d3ddc01b&s=title"
    const response = await fetch(apiURL);
    const films = await response.json();
    displayFilms(films);
  } catch (error) {
    console.error("Error fetching films:", error);
  }
}