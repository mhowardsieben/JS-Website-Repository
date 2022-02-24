const counterplus = document.querySelector('.upvoteButton');
const counterminus = document.querySelector('.downvoteButton');
let count = document.querySelector('.counter');

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let upVote = false;

counterplus.addEventListener('click', function() {
  let random = getRandomInt(10);
  console.log(random);
  if (random == 0) {
    upVote = true
    console.log("upvote = " + upVote);
  } else if (random > 0) {
    upVote = false;
    console.log('upvote = ' + upVote)
  }
  if (upVote === true) {
    count.innerHTML = parseInt(count.innerHTML) + 1;
    console.log('if 0')
  } else if (upVote === false) {
    count.innerHTML = parseInt(count.innerHTML) - 1;
    console.log('if not 0')
  }
});

counterminus.addEventListener('click', function() {
    count.innerHTML = parseInt(count.innerHTML) - 1;
});
