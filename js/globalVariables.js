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
var loggedIn = localStorage.getItem("loggedIn");
let count = document.querySelector('.counter');
let upVote = localStorage.getItem("upVote");

console.log(loggedIn)
