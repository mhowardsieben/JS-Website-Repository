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
  },
  {
    username: "Mercer",
    password: "Kitchen"
  }
]
const counterplus = document.querySelector('.upvoteButton');
const counterminus = document.querySelector('.downvoteButton');
const post = document.getElementById('post');
const loginButton = document.getElementById('Login');
const registerButton = document.getElementById('Register');
const signoutButton = document.getElementById('signOut');
var username = localStorage.getItem("username");
var password = localStorage.getItem("password")
var loggedIn = localStorage.getItem("loggedIn");
var registeredUsername = localStorage.getItem("username")
var registeredPassword = localStorage.getItem("password")
let count = document.querySelector('.counter');
let upVote = localStorage.getItem("upVote");
var voted = localStorage.getItem("voted");
console.log(loggedIn);
