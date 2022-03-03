signoutButton.addEventListener("click",
  function signOut() {
    loggedIn = false;
    localStorage.setItem("loggedIn", loggedIn);
    window.location.replace("..\\Index.html");
  }
)
if (loggedIn = false) {
  console.log("Signed Out")
  window.location.replace("..\\Index.html");
}
