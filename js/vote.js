var counterplus = document.getElementsByClassName('upvoteButton');
var counterminus = document.getElementsByClassName('downvoteButton');
var counterdisplay = document.getElementsByClassName('counter');
var count = 0;

updateDisplay();

counterplus.onclclick = function(){
  count += 1;
  updateDisplay();
}

function updateDisplay() {
  counterdisplay.innerhtml = count;
}
