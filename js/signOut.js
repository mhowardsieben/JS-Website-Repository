signoutButton.addEventListener("click",
  function signOut() {
    loggedIn = false;
    localStorage.setItem("loggedIn", loggedIn);
    window.location.replace("..\\index.html");
  }
);
