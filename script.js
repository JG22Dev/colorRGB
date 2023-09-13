
//Variables de los inputs
const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');
//Variables para luego mostrarlas en el parrafo
const textoRojo = document.getElementById('textoRojo');
const textoVerde = document.getElementById('textoVerde');
const textoAzul = document.getElementById('textoAzul');
//variable que toma y la usa como valor actual por .value
let rojo = inputRojo.value;//se toma el valor del rango de rojo con el atributo .value
let verde = inputVerde.value;
let azul = inputAzul.value;
//Muestra los que reflega el rango del input, los reemplaza en el Dom
textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

/**/

//Ahora hay que actualizar el texto y el color del fondo dandole funcionalidad

function actualizarColor(rojo, verde , azul){
    const colorRGB = `rgb(${rojo},${verde}, ${azul})`;
    document.body.style.backgroundColor = colorRGB;
}

//para actualizar red (rojo) con eventos.
inputRojo.addEventListener('change', (e)=>{
    rojo = e.target.value;
    textoRojo.innerText = rojo;
    actualizarColor(rojo,verde,azul);
});

//para actualizar green (verde) con eventos.
inputVerde.addEventListener('change', (e)=>{
    verde = e.target.value;
    textoVerde.innerText = verde;
    actualizarColor(rojo,verde,azul);
});

//para actualizar red (rojo) con eventos.
inputAzul.addEventListener('change', (e)=>{
    azul = e.target.value;
    textoAzul.innerText = azul;
    actualizarColor(rojo,verde,azul);
});