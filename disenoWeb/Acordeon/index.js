"use strict";
// declarar todas las variable
const indice = document.querySelectorAll(".Container-blocksIndex");
const text = document.querySelectorAll(".Container-blocksText")


//eventos para click en el indice
indice.forEach((titulo, index) => {
    // console.log("funciona")
    titulo.addEventListener("click", () => {
        text.forEach((texto) => {

            texto.classList.remove("isActive");
        })
        text[index].classList.add("isActive");
    })

})


