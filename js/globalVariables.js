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
var username = localStorage.getItem("username")
let count = document.querySelector('.counter');
let upVote = false;
console.log(username + " is logged in")
