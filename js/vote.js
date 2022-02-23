var counterplus = document.getElementById('upvoteButton');
var counterminus = document.getElementById('downvoteButton');
var counterdisplay = document.getElementById('counter');
var count = 0;

counterplus.onclclick = function(){
  count += 1;
  updateDisplay();
}
