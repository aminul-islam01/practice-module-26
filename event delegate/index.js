// const items = document.getElementsByClassName('item');
// for(const item of items){
//     item.addEventListener('click', function(event){
//         event.target.parentNode.removeChild(event.target);
//     });
// }


// document.getElementById('list-container').addEventListener('click', function(event){
//     event.target.parentNode.removeChild(event.target);
// })

document.getElementById('add-btn').addEventListener('click', function () {
    const listContainer = document.getElementById('list-container');

    const item = document.createElement('li');
    item.innerText = 'add new item';
    item.classList.add('item');
    listContainer.appendChild(item);
});


document.getElementById('list-container').addEventListener('click', function(event){
    event.target.style.backgroundColor = "gray";
    const item = event.target;

    document.getElementById('delete-btn').addEventListener('click', function () {
        item.style.display = "none";
    });
});