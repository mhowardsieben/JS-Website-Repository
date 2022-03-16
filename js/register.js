registerButton.addEventListener("click",
  function register() {
    var registeredUsername = document.getElementById('Username').value;
    var registeredPassword = document.getElementById('Password').value;
    localStorage.setItem("registeredUsername", registeredUsername);
    localStorage.setItem("registeredPassword", registeredPassword);
  }
)
