document.addEventListener('DOMContentLoaded', function() {
    let button = document.querySelector('#ex2Btn');
    let title = document.querySelector('h2')
    
    button.addEventListener('click', function(){
        title.style.color = 'purple'
    });
});