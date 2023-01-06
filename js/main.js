// Arreglo que contiene las respuestas correctas
let correctas = [3,1,2,2,3];

// Arreglo donde se guardan las respuestas del usuario
let opcionElegida = [];

let cantidadCorrectas = 0;

// Funcion que toma el numero de pregunta y el input elegido de esa pregunta

function respuesta(numPregunta, seleccionada){
  //guardo la respuesta elegida
  opcionElegida[numPregunta] = seleccionada.value;

  id="p" + numPregunta;

  labels = document.getElementById(id).childNodes;
  labels[3].style.backgroundColor = "White";
  labels[5].style.backgroundColor = "White";
  labels[7].style.backgroundColor = "White";

  //color para label seleccionado
  seleccionada.parentNode.style.backgroundColor = "#cec0fc"

}

// funcion para conocer cuantas preguntas eleigio correctamente
function corregir(){
  cantidadCorrectas = 0;
  for(i = 0; i < correctas.length; i++){
    if(correctas[i] == opcionElegida[i]){
      cantidadCorrectas++;
    }
  }

  document.getElementById("resultado").innerHTML = cantidadCorrectas;
}