let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

//DAR TEXTO A ETIQUETAS HTML SIN AUTOMATIZAR
//let titulo =  document.querySelector("h1");
//titulo.innerHTML = "juego del numero secreto";

//let parrafo = document.querySelector("p");
//parrafo.innerHTML = "indica numero del 1 al 10";

// MISMA FUNCION QUE LA DE ARRIBA PERO AUTOMATIZADA
// document.queryselector = seleccionar un elemento de HTML
// variable asignada al document.queryselector. innerHTML = Introducir elemento a la Etiqueta HTML
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto; 
    return;
}

function verificarIntento() {
// EXTRAER EL ELEMENTRO DEL IMPUT POR ID      
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
// Validar El numero 
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p' , `Acertaste el numero Secreto en ${intentos} ${(intentos === 1) ? 'Intento' : 'Intentos'}`);
        // .removeAttribute(' ') remueve un atributo que indiquemos en el HTML
        document.getElementById('reiniciar').removeAttribute('disabled');
    

    } else {
        // El usuario no Acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','Numero secreto es menor');
        } else {
            asignarTextoElemento('p','Numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
        
    }
    
    return;
}

function limpiarCaja(){
    //# = cuando queremos traer un elemento por ID
    document.querySelector('#valorUsuario').value = ''; // Limpiar caja de texto

}


function generarNumeroSecreto() {
    
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya han sido sorteados todos los numeros posibles');
    }else{

         // si el numero generado esta incluido en la lista hacemos esto, si no lo siguiente
        if (listaNumerosSorteados.includes(numeroGenerado)){

            return generarNumeroSecreto();

        }else {

            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;

        }


    }

   
    
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto=generarNumeroSecreto();
    console.log(numeroSecreto);
    intentos=1;


}

function reiniciarJuego(){
    //limpiar la caja de texto
    limpiarCaja();

    //reiniciar texto de idicar un numero del 1 al 1
    //generar numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();

    //desabalitar el boton de nuevo juego .setAttribute('disable','true') = agregamos un atributo a la etiqueta html
    document.getElementById('reiniciar').setAttribute('disabled','true');



   

}
// mandamos a llamar la funcion para agregar texto a una etiqueta HTML(etiqueta luego texto deseado)
// nombre de la funcion ("primer parametro de la funcion", "segundo parametro de la funcion")
//asignarTextoElemento('h1','Juego del número secreto!');
//asignarTextoElemento('p',`Indica un número del 1 al 10`);
condicionesIniciales();