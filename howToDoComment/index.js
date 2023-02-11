document.getElementById('comment-btn').addEventListener('click', function(){
    const commentBox = document.getElementById('comment-box');
    const comment = document.createElement('p');
    comment.innerText = commentBox.value;
    const commentArea = document.getElementById('comment-container');
    commentArea.appendChild(comment);
    commentBox.value = "";
});