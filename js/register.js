registerButton.addEventListener("click",
  function register() {
    var registeredUsername = document.getElementById('Username').value;
    var registeredPassword = document.getElementById('Password').value;
    localStorage.setItem("username", registeredUsername);
    localStorage.setItem("password", registeredPassword);
    username = registeredUsername;
    password = registeredPassword;
    location.reload();
  }
)
