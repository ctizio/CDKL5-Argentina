
// PARA VALIDAR DATOS DE SUSCRIPCION
const userName = document.getElementById("userName");
const surName = document.getElementById("surName");
const userEmail = document.getElementById("userEmail");

const alertSuccess = document.getElementById("alertSuccess");

const alertName = document.getElementById("alertName");
const alertsurName = document.getElementById("alertsurName");
const alertEmail = document.getElementById("alertEmail");

const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regSurName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

const listaDatos=[];
const listaDatos2=[];

// ALERTA PERSONALIZADA DE EXITO EN LA SUSCRIPCION
const pintarMensajeExito = () => {

    // alertSuccess.classList.remove("d-none");
   Swal.fire({
		title: 'Gracias!',
		text: 'Por compartir tu historia',
    
	  timer:90000,
		imageUrl: 'img/corazon2.jpg',
		imageWidth: 400,
		imageHeight: 200,
		imageAlt: 'Custom image',
    confirmButtonColor:'#8DD5F2',
    confirmButtonAriaLabel:'Confirmar'
      
   })

}
// RESETEAR CAMPOS UNA VEZ INGRESADO LOS DATOS
document.addEventListener('DOMContentLoaded', function(){
    let formulario = document.getElementById('formulario');
    formulario.addEventListener('submit', function() {
      formulario.reset();
    });
    location.hash = "#formul";
  });


// MENSAJE DE ERROR DE DATOS INGRESADOS INVALIDOS

const pintarMensajeError = (errores) => {
    errores.forEach((item) => {
        item.tipo.classList.remove("d-none");
        item.tipo.textContent = item.msg;
    });
};



formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    alertSuccess.classList.add("d-none");
 
    const errores = [];

    // validar nombre
     if (!regUserName.test(userName.value) || !userName.value.trim()) {
        userName.classList.add("is-invalid");

         errores.push({
             tipo: alertName,
             msg: "Nombre admite solo letras",
        });
     } else {
        userName.classList.remove("is-invalid");
        userName.classList.add("is-valid");
        alertName.classList.add("d-none");
     }

    //  validar apellido
       
        if (!regSurName.test(surName.value) || !surName.value.trim()) {
          surName.classList.add("is-invalid");
  
           errores.push({
               tipo: alertsurName,
               msg: "Apellido admite solo letras",
          });
       } else {
          surName.classList.remove("is-invalid");
         surName.classList.add("is-valid");
          alertsurName.classList.add("d-none");
       }

    // validar email
    if (!regUserEmail.test(userEmail.value) || !userEmail.value.trim()) {
        userEmail.classList.add("is-invalid");

        errores.push({
            tipo: alertEmail,
            msg: "Escriba un correo válido",
        });
    } else {
        userEmail.classList.remove("is-invalid");
        userEmail.classList.add("is-valid");
        alertEmail.classList.add("d-none");
    }

    if (errores.length !== 0) {
        pintarMensajeError(errores);
        return;
    }

    console.log("Formulario enviado con éxito");
   
    pintarMensajeExito();
   
// FORM DATA: PARA VER LOS DATOS CARGADOS DEL FORMULARIO EN LOCALSTORAGE


   
       const inputs = new FormData(formulario);
     
   
       const datos={userName:inputs.get("userName"),
       surName:inputs.get("surName"),
       userEmail:inputs.get("userEmail"), 
       mensaje:inputs.get("mensaje")
       }
       
       
      
       listaDatos.push(datos);
       // for (let campo of inputs.entries()) {
       //     datos.push(campo);
       //  }

        for(let i in listaDatos){
           console.log(listaDatos[i]);
       }



        const guardaLocal=(clave,valor)=>{
           localStorage.setItem(clave,valor)
        };
        for (const dato of listaDatos){
          guardaLocal("Lista Contactos",JSON.stringify(listaDatos));
        }
        for(let i in listaDatos){
           console.log(listaDatos[i]);
        }

     
});