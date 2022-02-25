var post = document.getElementById('post');
post.addEventListener('click', function() {
  var commentBoxValue = document.getElementById('commentBox').value;

  var li = document.createElement('li');
  var text = document.createTextNode(commentBoxValue);
  li.appendChild(text);
  document.getElementById('unordered');
  console.log('Posted')
})
