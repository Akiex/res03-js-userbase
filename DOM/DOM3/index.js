document.addEventListener('DOMContentLoaded', function() {
    let button = document.querySelector('#ex3Btn');
    
    
    button.addEventListener('click', function(){
        let grid = document.querySelector('#grid');
        
            grid.classList.toggle('grid-2', 'grid-3');
        
        
            grid.classList.toggle('grid-3');
    });
});