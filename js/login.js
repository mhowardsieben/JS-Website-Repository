loginButton.addEventListener("click",
  function getInfo() {
    var username = document.getElementById('Username').value;
    var password = document.getElementById('Password').value;
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    for(i = 0; i < loginValues.length; i++) {
      if (username == loginValues[i].username && password == loginValues[i].password) {
        window.location.href = "childPages\\main.html";
        loggedIn = true;
        localStorage.setItem("loggedIn", loggedIn);
        return;
      }
    }
    console.log("Incorrect Login")
  }
)
if (loggedIn === true) {
  window.location.replace("childPages\\main.html");
}
