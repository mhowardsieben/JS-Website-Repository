post.addEventListener('click', function() {
  var commentBoxValue = document.getElementById('commentBox').value;
  var ul = document.createElement('ul');
  var text = document.createTextNode(commentBoxValue);
  ul.appendChild(text);
  document.getElementById('unordered').appendChild(ul);
  console.log('posted');
})
