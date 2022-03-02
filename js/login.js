var loginButton = document.getElementById('Login');
var loginValues= [
  {
    username: "Ben",
    password: "Sucks"
  },
  {
    username: "Mikael",
    password: "Rocks"
  },
  {
    username: "Safi",
    password: "egg"
  }
]

loginButton.addEventListener("click",
  function getInfo() {
    var username = document.getElementById('Username').value;
    var password = document.getElementById('Password').value;
    for(i = 0; i < loginValues.length; i++) {
      if (username == loginValues[i].username && password == loginValues[i].password) {
        console.log(username + " is logged in");
        window.location.replace("childPages\\main.html");
        return;
      }
    }
    console.log("Incorrect Login")
  }
)
