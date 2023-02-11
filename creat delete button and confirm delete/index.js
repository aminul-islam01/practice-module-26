document.getElementById('delete-confirm').addEventListener('keyup', function(even){
    const text = even.target.value;
    const deleteBtn = document.getElementById('delete-btn');
    if(text === "delete"){
        deleteBtn.removeAttribute("disabled");
    }
    else{
        deleteBtn.setAttribute("disabled",true)
    }
});

document.getElementById('delete-btn').addEventListener('click', function(){
    const deleteInfo = document.getElementById('delete-info');
    deleteInfo.style.display = 'none';
});