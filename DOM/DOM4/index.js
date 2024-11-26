document.addEventListener('DOMContentLoaded', function() {
    let ul = document.querySelector('ul');
    let button = document.querySelector('button');
    let li = document.createElement('li');
    
    button.addEventListener('click', function(){
        li.textContent= 'Beurre';
        ul.appendChild(li);
        
    })
    
    
});