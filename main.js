//Event listener for clicking on submit button
document.getElementById('submit').addEventListener('click', function () {
  var name = document.getElementById('name').value;
  var text = document.getElementById('message').value;

  var postsDiv = document.querySelector('.posts');

  var newPostDiv = document.createElement('div');

  var newPostP = document.createElement('p');
  var newPostNode = document.createTextNode(`${text} - Posted By: ${name}`);
  newPostP.appendChild(newPostNode);

  var newPostHR = document.createElement('hr');

  newPostDiv.append(newPostP);
  newPostDiv.append(newPostHR);

  postsDiv.append(newPostDiv);

})