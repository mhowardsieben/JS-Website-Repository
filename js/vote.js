const counterplus = document.querySelector('.upvoteButton');
const counterminus = document.querySelector('.downvoteButton');
let count = document.querySelector('.counter');

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

let upVote = false;
let downVote = false;

counterplus.addEventListener('click', function() {
  let downVote = false
  if (downVote === false) {
    count.innerHTML = parseInt(count.innerHTML) - 1;
  }
});

counterminus.addEventListener('click', function() {
  let upVote = true
  if (upVote === true) {
    count.innerHTML = parseInt(count.innerHTML) - 1;
  }
});
