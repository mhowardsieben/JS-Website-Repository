signoutButton.addEventListener("click",
  function signOut() {
    let loggedIn = false;
    localStorage.setItem("loggedIn", loggedIn);
    console.log("Signed Out")
    window.location.replace("..\\Index.html");
    return;
  }
)
