document.addEventListener('DOMContentLoaded', function(){
    
    let form = document.querySelector('#formEx4')
    
    
    
    
    form.addEventListener('submit', function(event){
        event.preventDefault();
        
        
    let all = document.querySelectorAll('tbody > tr');
    
    let select = document.querySelector('#statusFilter');
    let filterValue = select.value;
    
    all.forEach(function(row) {
            if (filterValue === "all") {
                
                row.style.display = '';
            } else if (filterValue === "active" && row.classList.contains("active")) {
                
                row.style.display = '';
            } else if (filterValue === "inactive" && row.classList.contains("inactive")) {
                
                row.style.display = '';
            } else {
                
                row.style.display = 'none';
            }
    });
    
        
    })
});