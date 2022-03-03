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
var loginButton = document.getElementById('Login')
let count = document.querySelector('.counter');
let loggedIn = false;
let upVote = false;
if (loggedIn == true) {
  console.log(username + " is logged in")
}
