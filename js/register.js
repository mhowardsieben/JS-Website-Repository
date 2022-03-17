registerButton.addEventListener("click",
  function register() {
    var username = document.getElementById('Username').value;
    var password = document.getElementById('Password').value;
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  }
)
