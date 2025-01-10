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

const signupForm = document.querySelector("#signupForm");
signupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.querySelector("#user").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#pword").value;
  const verifyPassword = document.querySelector("#vpword").value;

  if (password !== verifyPassword) {
    alert("Passwords do not match.");
    return;
  }

  const userExists = users.some(u => u.username === username);

  if (userExists) {
    alert("Username already exists.");
  } else {
    users.push({ username, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Signup successful!");
    window.location.href = "./login.html";
  }
});

// Save users to localStorage
localStorage.setItem("users", JSON.stringify(users));
