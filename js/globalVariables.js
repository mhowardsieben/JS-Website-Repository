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
const counterplus = document.querySelector('.upvoteButton');
const counterminus = document.querySelector('.downvoteButton');
var post = document.getElementById('post');
var loginButton = document.getElementById('Login');
var signoutButton = document.getElementById('signOut');
var username = localStorage.getItem("username");
var loggedIn = false;
var loggedIn = localStorage.getItem("loggedIn");
let count = document.querySelector('.counter');
let upVote = false;
console.log(loggedIn)
if (loggedIn = true) {
  window.location.href = "childPages\\main.html";
  console.log("Its Working")
}
else if (loggedIn = false) {
  console.log("Signed Out")
  window.location.replace("..\\Index.html");
}
