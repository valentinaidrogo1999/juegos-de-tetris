//boton de la pagina modal
const openmodal = document.querySelector("#instrucciones");
const modal = document.querySelector(".modal");
const closemodal = document.querySelector(".btn-modal");


openmodal = addEventListener("click", (e) =>{
    e.preventDefault();
    modal.classList.add("modal--show");

});

closemodal = addEventListener("click", (e) =>{
    e.preventDefault();
    modal.classList.remove("modal--show");

});