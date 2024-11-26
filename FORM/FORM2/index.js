document.addEventListener('DOMContentLoaded', function(){
    let form = document.querySelector('#text')
    
    form.addEventListener('change', function(event){
       let text = document.querySelector('#textPreview > p')
            
            text.textContent = form.value;
        
        
    })
    
});