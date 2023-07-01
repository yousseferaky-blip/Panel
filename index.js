
let panel = document.querySelectorAll(".panel")

panel.forEach((panels)=>{
    panels.addEventListener("click",()=>{
        RemovePanel()   
        panels.classList.add("active") 
    })
})

function RemovePanel(){
    panel.forEach((panels)=>{
        panels.classList.remove("active")  
    })
}
















