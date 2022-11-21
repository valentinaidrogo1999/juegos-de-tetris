//boton de la pagina modal
const instructions = document.querySelector("#instrucciones");
const modal = document.querySelector(".modal");
const modalCapita = document.querySelector(".modal-capita");
const closeButton = document.querySelector(".btn-modal");

const closeModal = (e) => {
  e.preventDefault();
  modal.classList.remove("modal--show");
  modalCapita.classList.remove("modal-fondo");
};

const openModal = (e) => {
  e.preventDefault();
  modalCapita.classList.add("modal-fondo");
  modal.classList.add("modal--show");
};

instructions.addEventListener("click", openModal);

closeButton.addEventListener("click", closeModal);
modalCapita.addEventListener("click", closeModal);

// Necesitamos evitar que cuando, hagan click en uno de los elementos HTML hijos del "modal-capita"
// NO se ejecute su metodo "onClick" que cierra el modal
modal.addEventListener("click", (e) => e.stopPropagation());



let intervalId;
let contador = 0 ;

//funcion para el tiempo

document.querySelector(".texts")
function time (){
  intervalId = setInterval(() =>{
    document.querySelector(".tiempo").textContent = contador;
    contador++;
    
  }, 1000)
  
}

time()
