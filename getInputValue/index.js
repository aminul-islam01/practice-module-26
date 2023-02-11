document.getElementById('submit').addEventListener('click', function(){
    const newUser = document.getElementById('set-user-name');
    const newUserName = newUser.value;
    const userName = document.getElementById('user-name');
    userName.innerText = newUserName;
    newUser.value = "";
});
