// Get the login form and error message elements
const loginForm = document.getElementById("login-form");
const errorMessage = document.getElementById("error-message");

// Check if the user is already logged in
if (localStorage.getItem("isLoggedIn")) {
  // Redirect to the resume page
  window.location.href = "resume.html";
}

// Handle login form submission
loginForm.addEventListener("submit", function(event) {
  event.preventDefault();

  // Get the input values
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Check if the username and password are valid
  if (username === "User" && password === "password") {
    // Store the login status in local storage
    localStorage.setItem("isLoggedIn", true);

    // Redirect to the resume page
    window.location.href = "resume.html";
  } else {
    // Display an error message
    errorMessage.textContent = "Invalid username/password.";
  }
});

// Disable the back button on the resume page
window.onload = function() {
  if (typeof history.pushState === "function") {
    history.pushState(null, null, location.href);
    window.onpopstate = function() {
      history.go(1);
    };
  }
};
