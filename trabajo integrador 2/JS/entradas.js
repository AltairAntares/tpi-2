 // defino el valor del ticket como variable por si en algun momento cambia al igual que los descuentos
 const precio=200
 const decEstudiante = 80
 const descTrainee = 50
 const descJunior = 15

// Defino la funcion que voy a llamar desde el html
function pago_total() {


// verifico que el campo de cantidad de personas no se encuentre vacio o sea 0 y de ser asi tiro un mensaje para que se complete el campo y hago foco donde se encuentra el error
if ( (cantidadDePersonas.value <= 0)  ) { 
    window.alert("Por favor, ingrese la cantidad de personas correspondientes a los tickets que desea comprar.");
    cantidadDePersonas.focus();
return;  }

 // verifico que se seleccione un tipo de entrada y de lo contrario tiro un mensaje para que se seleccione y hago foco donde se encuentra el error
 if (tipoDeEntrada.value === "Seleccione una opción") {
   window.alert("Por favor, selecciona una categori­a.");
   tipoDeEntrada.focus();
  return;}

 // defino el valor total en funcion de la cantidad y el tipo y lo devuelvo a la pagina

     if (tipoDeEntrada.value === "1") {
        ValorTotal =  (cantidadDePersonas.value) * precio;
     }
     if (tipoDeEntrada.value === "2") {
          ValorTotal =  (cantidadDePersonas.value) * precio * ((100-decEstudiante)/100)
     }
     if (tipoDeEntrada.value === "3") {
        ValorTotal =  (cantidadDePersonas.value) * precio * ((100-descTrainee)/100);
     }
     if (tipoDeEntrada.value === "4") {
        ValorTotal =  (cantidadDePersonas.value) * precio * ((100-descJunior)/100);
     }
 
     // devuelvo el valor alformulario de consulta
     totalPago.innerText = "Total a pagar: $ " + ValorTotal; 
     totalPago.style.fontSize = '20px';   // Cambia el tamaño del texto a 20px
     totalPago.style.color = 'blue'; 

    }

// Boton resumen dispara la funcion del calculo y recibe un valor en el casillero correspondiente
resumen.addEventListener('click', pago_total);

// FunciÃ³n para el botÃ³n Borrar para que borre el valor
function reset_total_a_pagar() {
    quitarClaseError();
    totalPago.innerHTML = "";
}
borrar.addEventListener('click', reset_total_a_pagar);


  
  
  
  
  
  