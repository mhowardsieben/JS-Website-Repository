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
