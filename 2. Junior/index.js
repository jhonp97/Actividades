//-----------------------------------------------------//
// -------------DECLARACION DE VARIABLE----------------//
//-----------------------------------------------------//
const secciones = document.querySelectorAll(".Section");
const barra1 = document.querySelector(".Inferior-barra1");
const barra2 = document.querySelector(".Inferior-barra2");
const interaccion1 = document.querySelector(".Inferior-interaccion1");
const interaccion2 = document.querySelector(".Inferior-interaccion2");
const abrirMenu = document.getElementById("header-btn");
const menu = document.querySelector(".Header-menu");
const icono = document.querySelectorAll(".fa-solid");
const menuLink = document.getElementById("menu-link");
const menuList = document.getElementById("Header-menuList");
const furniture = document.querySelector(".Header-menuItem-1");
const sofaBlanco = document.querySelector(".Header-menuItem-img");

abrirMenu.addEventListener('click', () => {
    document.body.classList.toggle('menu-open');
    menu.classList.toggle('menu-open');
    icono.forEach(i => i.classList.toggle('active'));
});

let posicion = 0;
// console.log("funciona", secciones[0]);

//-----------------------------------------------------//
// ------------------- FUNCIONES -----------------------//
//-----------------------------------------------------//
function moverAbajo(){
         secciones[1].classList.add("active");
         secciones[0].classList.remove("active");
         
         posicion++;
         barra1.style.width = "0"
         barra2.style.width = "12rem"
}

function moverArriba(){
     secciones[0].classList.add("active");
     secciones[1].classList.remove("active");
     barra1.style.width = "100%";
     barra2.style.width = "0";
}

function mostrarElemento(elem1, elem2){
    elem1.addEventListener("mouseover",()=>{
        elem2.classList.add("active");
    })
    elem1.addEventListener("mouseleave",()=>{
        elem2.classList.remove("active");
    })
};

mostrarElemento(menuLink, menuList);
mostrarElemento(furniture, sofaBlanco);

//-----------------------------------------------------//
// -------------------- EVENTOS -----------------------//
//-----------------------------------------------------//
window.addEventListener("wheel", (e)=>{
    if(e.deltaY > 0){
        moverAbajo();
        
        
    }else{
        moverArriba()}
        
    })

    interaccion1.addEventListener("click", moverArriba);
    interaccion2.addEventListener("click", moverAbajo);
// window.addEventListener("wheel",(e)=>{

    
//     if( e.deltaY > 0){
//     secciones[1].classList.add("active");
//     secciones[0].classList.remove("active");
//     posicion++;
//     barra1.style.width = "0"
    
//     barra2.style.width = "12rem"

// }  else{
    
//         secciones[0].classList.add("active");
//         secciones[1].classList.remove("active");
//         barra1.style.width = "100%";
        
//         barra2.style.width = "0";
        
//      }
// })


// interaccion1.addEventListener("click", ()=>{
//     secciones[0].classList.add("active");
//         secciones[1].classList.remove("active");
//         barra1.style.width = "100%";
        
//         barra2.style.width = "0";
// });
// interaccion2.addEventListener("click", mover);