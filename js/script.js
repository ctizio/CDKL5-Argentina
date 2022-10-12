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

let familias = [
  {
    nombre: "Catalina Genen",
    foto: "img/foto6.png",
    foto2:"img/foto7.png",
    alt: "foto6",
    descripcion: "Actualmente de 10 años de la provincia de Neuquén. A los 3 años fue diagnosticada con el síndrome CDKL5, pero los síntomas de esta enfermedad comenzaron cuando apenas nació, ya que fue una bebe que lloraba continuamente y dormía muy poco. Al mes y medio de vida comenzaron las convulsiones que hasta el día de hoy persisten diariamente. Puede caminar con ayuda, tiene alteraciones sensoriales, problemas de deglución, no puede hablar, tienen convulsiones todos los días, es hiperlaxa, tiene problemas de sueño, le molesta el ruido y sufre de problemas intestinales y estomacales, entre otras tantas dolencias… Ha vivido situaciones difíciles en su corta edad, pero se ha sobrepuesto a todo. Tiene 10 años y en este tiempo aprendió a sonreír, a bailar, a andar en bici. Es  fanática de los paseos en auto, le encantan las hamacas y los árboles. Su familia anhela un tratamiento y una cura."
  },
  {
    nombre: "Allegra",
    foto: "img/foto8.png",
    foto2:"img/foto11.png",
    alt: "foto8",
    descripcion: "Ella es Allegra, segunda hija que actualmente tiene 21 meses. De la provincia de Córdoba.Allegra fue diagnosticada Con el síndrome de deficiencia de CDKL5 cuando tenía 15 meses, luego de realizar un estudio genético. A los dos meses de vida comenzó con convulsiones. Requirió internaciones para realizar estudios y hasta el día de hoy continúa con crisis, aun así estando medicada. Alegra asiste a tres tipos de terapias 8 veces por semana que la ayudan a desarrollarse y en casa su familia ayuda para ello. Su familia anhela que los expertos puedan investigar más y tener la cura."
  },
  {
    nombre: "Jimena",
    foto: "img/foto3.png",
    foto2:"img/foto9.png",
    alt: "foto3",
    descripcion: "Ella es Jimena de 4 años de la provincia de Córdoba. El síndrome CDKL5 inició a los 6 meses de vida con convulsiones mientras dormía y ante la preocupación sus padres acudieron a la guardia médica y ahí comenzó su internación para determinar el origen de las crisis. Entre ellos el estudio genético que confirmaría meses después la enfermedad CDKL5. Como no se conoce mucho sobre esta enfermedad rara, su familia espera que se visibilicen los casos para tener mayor conocimiento. Su familia abraza fuerte a todas las familias que tienen un niño con CDKL5 y que con fe y esperanza esperan la cura."
  }
]

let main = document.querySelector(".main-nosotros");
for (let persona of familias) {
  //creo el div class=descripcion-nosotros"
  let descNos = document.createElement("div");
  descNos.className = "descripcion-nosotros";
  // creo el h3 para el nombre
  let nom = document.createElement("h3");
  nom.innerText = persona.nombre;
  //agrego h3 dentro de div .descripcion-nombre
  descNos.appendChild(nom);

  //cre div class="fotos"
  let descFoto = document.createElement("div");
  descFoto.className = "fotos";
  //agrego div .fotos al div.descripcion-nosotros;
  descNos.appendChild(descFoto);
  // creo img
  let descImg = document.createElement("img");
  descImg.src= persona.foto;
  descImg.alt= persona.alt;
  descImg.id = "fotoX1";
  //agrego img #fotoX1 a div .fotos;
  descFoto.appendChild(descImg);
 // creo img
 let descImg2 = document.createElement("img");
 descImg2.src= persona.foto2;
 descImg2.alt= persona.alt;
 descImg2.id = "fotoX1";
 //agrego img #fotoX1 a div .fotos;
 descFoto.appendChild(descImg2);



  // creo div class="descripcion-parrafo"
  let descDesc = document.createElement("div");
  descDesc.className = "descripcion-nosotros";
  descNos.appendChild(descDesc);
  //creo p
  let descP = document.createElement("p");
  descP.innerText = persona.descripcion;
  
  //agrego p a .descripcion-parrafo
  descDesc.appendChild(descP);
 main.appendChild(descNos); 
}