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
const signoutButton = document.getElementById('signOut');
var username = localStorage.getItem("username");
var loggedIn = localStorage.getItem("loggedIn");
let count = document.querySelector('.counter');
let upVote = localStorage.getItem("upVote");
console.log(loggedIn);
