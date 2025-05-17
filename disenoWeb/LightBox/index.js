// declaracion de variables
const Contain = document.querySelector(".Contain")
const img = document.querySelector(".Contain-imgPicture");
const cerrar = document.querySelector(".Close");
const lightbox = document.querySelector(".Ligthbox");
const imgGrande = document.querySelector(".Lightbox-img");

img.addEventListener("click",()=>{
    lightbox.style.display="Flex";
    
    setTimeout(()=>{lightbox.style.opacity = 1;},300)
    imgGrande.src = img.src;
    // lightbox.style.opacity = 1;
    console.log("on");
})

cerrar.addEventListener("click",()=>{
    lightbox.style.opacity = 0;
    setTimeout(()=>{
        lightbox.style.display="none";
    },300)  
});

