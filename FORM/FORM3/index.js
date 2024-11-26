document.addEventListener('DOMContentLoaded', function(){
    let ul = document.querySelector('#taskList')
    let form = document.querySelector('#formEx3')
    
    form.addEventListener('submit', function(event){
        event.preventDefault()
       let text = document.querySelector('#task');
       let li = document.createElement('li');
       
       li.textContent = text.value;
            
            ul.appendChild(li)
        
        
    })
    
});