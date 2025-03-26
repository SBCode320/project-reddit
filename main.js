//Event listener for clicking on submit button
document.getElementById('submit').addEventListener('click', function () {
  const name = document.getElementById('name').value;
  const text = document.getElementById('message').value;

  const postsDiv = document.querySelector('.posts');

  //Create wrapper for individual post
  const newPostDiv = document.createElement('div');

  //Create <p> and text node for post 
  const newPostP = document.createElement('p');
  const newPostNode = document.createTextNode(`${text} - Posted By: ${name}`);
  newPostP.appendChild(newPostNode);

  //Create remove button
  const removeButton = document.createElement('button'); 
  removeButton.textContent = 'Remove Post'; 

  //Create comments button
  const commentButton = document.createElement('button'); 
  commentButton.textContent = 'See Comments'; 

  //Create <hr> 
  const newPostHR = document.createElement('hr');

  //Append the remove link, post, and hr to the post div
  newPostDiv.append(removeButton); 
  newPostDiv.append(commentButton); 
  newPostDiv.append(newPostP);
  newPostDiv.append(newPostHR);

  //Append the post to postDiv
  postsDiv.append(newPostDiv);


})