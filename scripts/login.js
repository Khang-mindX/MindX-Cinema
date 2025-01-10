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

const users = JSON.parse(localStorage.getItem("users")) || [    
  { username: "admin", password: "mindx" },
  { username: "film_lover", password: "cinema" }
];

const loginButton = document.querySelector("#login");
loginButton.addEventListener("click", () => {
  window.location.href = "./login.html";
});

const loginForm = document.querySelector("#loginForm");
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.querySelector("#user").value;
  const password = document.querySelector("#pword").value;

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    alert("Login successful!");
    window.location.href = "./index.html";
  } else {
    alert("Invalid username or password.");
  }
});

// Save users to localStorage
localStorage.setItem("users", JSON.stringify(users));
