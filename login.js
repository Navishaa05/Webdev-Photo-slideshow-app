function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var loginMessage = document.getElementById("loginMessage");
  
    if (username === "user" && password === "1234") {
      loginMessage.textContent = "Login Success";
      loginMessage.style.color = "green";
    } else if (username === "admin" && password === "admin") {
      loginMessage.textContent = "Admin Login Success";
      loginMessage.style.color = "green";
    } else {
      loginMessage.textContent = "Invalid username or password";
    }
  }
  
  function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var showHideIcon = document.querySelector(".show-hide");
  
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      showHideIcon.textContent = "Hide";
    } else {
      passwordInput.type = "password";
      showHideIcon.textContent = "Show";
    }
  }
  