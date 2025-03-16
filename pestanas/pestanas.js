const btn = document.querySelectorAll(".btn");
const text = document.querySelectorAll(".txt");

btn.forEach((opcion, i)=>{
    opcion.addEventListener("click", ()=>{
        text.forEach((texto)=>{
            texto.classList.remove("isActive")
        })
        
        
        text[i].classList.add("isActive");
    })
})