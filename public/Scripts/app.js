 //IEFE -- Immediatel invoked function expression
(function(){
    function Start()
    {
        console.log("App started"); 
        let deleteButtons = document.querySelector('.btn-danger'); 
        for (Button of deleteButtons)
    {
        button.addEventListener('click', (event)=>{
        if(!confirm("Are you sure"))
        {
            event.preventDefault();
            window.location.assign('/caloriesCounter'); 
        }
        }); 
    }

    }
    window.addEventListener("load", Start); 
})(); 

