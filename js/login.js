loginButton.addEventListener("click",
  function getInfo() {
    var username = document.getElementById('Username').value;
    var password = document.getElementById('Password').value;
    for(i = 0; i < loginValues.length; i++) {
      if (username == loginValues[i].username && password == loginValues[i].password) {
        console.log(username + " is logged in");
        window.location.replace("childPages\\main.html");
        loggedIn = true;
        return;
      }
    }
    console.log("Incorrect Login")
  }
)
