//  seleccionamos los dos elementos que serán clickables

const toggleButton = document.getElementById("button-menu");
const navWrapper = document.getElementById("nav");

/* 
  cada vez que se haga click en el botón 
  agrega y quita las clases necesarias 
  para que el menú se muestre.
*/
toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("close");
  navWrapper.classList.toggle("show");
});

/* 
  Cuándo se haga click fuera del contenedor de enlaces 
  el menú debe esconderse.
*/

navWrapper.addEventListener("click", e => {
  if (e.target.id === "nav") {
    navWrapper.classList.remove("show");
    toggleButton.classList.remove("close");
  }
});

document.addEventListener('DOMContentLoaded',()=>{
  const elementosCarousel=document.querySelectorAll('.carousel');
  M.Carousel.init(elementosCarousel,{
    duration:150,
    dist:-80,
    shift:5,
    padding:5,
    numVisible:4,
    indicators:true,
    nowrap:true

  }) 
})

let suscripciones = [];

const getValueInput = () => {
  suscripciones.push(document.getElementsByClassName("boton-email")[0].value);
  
  console.log(suscripciones);
  alert("Gracias por susbribirse.");
}
document.addEventListener('DOMContentLoaded', function(){
  let formulario = document.getElementById('formul');
  formulario.addEventListener('submit', function() {
    formulario.reset();
  });
  location.hash = "#formul";
});