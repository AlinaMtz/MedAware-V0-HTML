let tema = "ACV";

let indice = 0;

let puntos = 0;

function cargar(){

const reto = retos[tema][indice];

document.getElementById("titulo").innerHTML = tema;

document.getElementById("pregunta").innerHTML = reto.pregunta;

let html="";

reto.opciones.forEach((opcion,i)=>{

html += `
<button onclick="responder(${i})">
${opcion}
</button>
`;

});

document.getElementById("opciones").innerHTML=html;

}

function responder(i){

const reto=retos[tema][indice];

if(i==reto.correcta){

puntos+=10;

document.getElementById("feedback").innerHTML="✅ Correcto";

}else{

document.getElementById("feedback").innerHTML="❌ Incorrecto";

}

document.getElementById("score").innerHTML="⭐ "+puntos+" pts";

}

function siguiente(){

indice++;

if(indice>=retos[tema].length){

indice=0;

}

cargar();

}

function cambiarTema(nuevo){

tema=nuevo;

indice=0;

cargar();

}

cargar();
