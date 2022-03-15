var loggedIn = localStorage.getItem("loggedIn");
signoutButton.addEventListener("click",
  function signOut() {
    loggedIn = false;
    localStorage.setItem("loggedIn", loggedIn);
    window.location.replace("..\\index.html");
  }
);
window.addEventListener("load",
  function() {
    if (loggedIn === false) {
      window.location.replace("..\\index.html");
      console.log("You are not Logged In!")
    };
  }
);
if (loggedIn == "false" || loggedIn == null) {
  window.location.replace("..\\index.html");
  console.log("Not Signed In");
}
