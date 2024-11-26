document.addEventListener('DOMContentLoaded', function(){
    let form = document.querySelector('#formEx1')
    
    form.addEventListener('submit', function(event){
        event.preventDefault();
        
        alert('Formulaire soumis')
    })
    
});