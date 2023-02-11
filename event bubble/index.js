document.getElementById('item2').addEventListener('click', function(even){
    console.log('item2 clicked');
    // even.stopPropagation();
    even.stopImmediatePropagation();
});

document.getElementById('item2').addEventListener('click', function(even){
    console.log('item2 2nd clicked');
});

document.getElementById('item2').addEventListener('click', function(even){
    console.log('item2 3rd clicked');
});

document.getElementById('item2').addEventListener('click', function(even){
    console.log('item2 4th clicked');
});

document.getElementById('list-ul').addEventListener('click', function(){
    console.log('list ul clicked');
});

document.getElementById('list-container').addEventListener('click', function(){
    console.log('list container clicked');
});