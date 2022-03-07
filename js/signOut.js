signoutButton.addEventListener("click",
  function signOut() {
    loggedIn = false;
    localStorage.setItem("loggedIn", loggedIn);
    window.location.replace("..\\index.html");
  }
);
if (loggedIn === false) {
  console.log("Logged In");
  window.location.replace("..\\index.html");
}
