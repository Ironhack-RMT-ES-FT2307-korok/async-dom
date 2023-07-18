
// tengo variables o funciones en hoisting

console.log("probando")


// let y const

// console.log(myName) // no puedo

let myName = "Jorge";

console.log(myName)

// let myName = "Bob"; // no puedo


// var

// al inicio
// var myAge = undefined

console.log(myAge) // no deberia pero si puedo
// ocurre un proceso de hoisting
// hoisting es: 
// - cuando JS hace una prelectura todas las variables inicializadas con var
// - las sube al inicio del codigo
// - el valor no se les aun, su valor es undefined hasta que se le asigne.


var myAge = 29;

console.log(myAge)

var myAge = 36;

console.log(myAge) // no deberia pero si puedo



// funciones
// al inicio del codigo
// function myFuncion() { } // la misma referencia de cuando se creo.

// con funciones tambien ocurre el proceso de hoisting
myFuncion();

function myFuncion() {
  console.log("hola")
};

myFuncion();

function myFuncion() {
  console.log("adios")
}

myFuncion();

// estructura

// 1. todas las invocaciones
// 2. ordenadas todas las declaraciones de funciones

// newFunction() // no puedo, como debe ser!

let newFunction = function() {
  console.log("funcion ES6")
}

newFunction()

// let newFunction = function() {
//   console.log("funcion ES6")
// } // no puedo, como debe ser!


// funcion anonima no existe hoisting
let arr = [1, 2, 3]
arr.forEach(() => { })


// SCOPES => cuando abrimos y cerramos llaves {  }


// SCOPE GLOBAL => es accesible en CUALQUIER lugar de mi codigo

let name = "Pedro"; // en el scope global

if (true) {
  for (let i = 0; i < 10; i++) {
    if (true) {
      console.log(name)
    }
  }
}


// SCOPE DE BLOQUE => condicionales, bucles o simplemente abrimos un bloque.

console.log(myString2) // no deberia y si se puede

{
  let myString1 = "variable con let";
  var myString2 = "variable con var";
  myString3 = "variable sin declarar"; // crear una variable global
  
  console.log(myString1)
  console.log(myString2)
  console.log(myString3)
}

// console.log(myString1) // no se puede, se borra de la memoria
console.log(myString2) // no deberia y si se puede
console.log(myString3) // no deberia y si se puede


// for (let i = 0; i < ...)

// SCOPE DE FUNCIONES => espacio de codigo creado en una funcion

function someValues() {
  let myValue1 = "valor con let"; // la forma correcta
  var myValue2 = "valor con var"; // no puedo acceder por fuera. Si existe hoisting pero el sistema la alza AL INICIO DE LA FUNCION
  myValue3 = "valor sin declarar"; // crear una variable global
  
  console.log(myValue1)
  console.log(myValue2)
  console.log(myValue3)
}

someValues()

// console.log(myValue1)
// console.log(myValue2)
// console.log(myValue3) // TERRIBLE PRACTICA


// que nos debe quedar de esta clase.

// 1. no usar var y cuando usamos function tomar en cuenta no reescribirlas
// 2. NUNCA crear variables sin declarar (let o const)
// 3. Siempre que sea posible usar funciones de flecha
// 4. Estudiar sobre esto para prepararnos a entrevistas tecnicas



// JS Asincronia

let myStr = "Hola"; // 0.01
console.log(myStr); // 0.02
myStr = "Adios"; // 0.01
console.log(myStr); // 0.03

// cada operacion espera que la anterior termine antes de ejecutarse

// dos metodos que nos permiten replicar asincronia en JS

// setTimeout => va a esperar un tiempo real, antes de ejecutar el codigo

// 1. la funcion que determina la accion que va a ocurrir luego del tiempo
// 2. el tiempo (en milisegundos) que debe esperar

setTimeout( () => {
  console.log("4. luego de 3 segundos")
}, 800 ) // 3 segundos

setTimeout(() => {
  console.log("2. a los 0 segundos")
}, 0)

setTimeout(() => {
  console.log("3. timer -1000")
}, -1000) // lo procesa como un 0


console.log( "1. fuera del setTimeout" )

// JS primero va a procesar todas las ejecuciones sincronas!
// y despues todas las ejecuciones Asincronas


// setInterval => crear un intervalo que ejecuta una funcion cada cierto tiempo

// let interval1Id = setInterval(() => {
//   console.log("ejecutandose cada segundo")
// }, 1000)

// setInterval y setTimeout retornan un ID donde podemos hacer referencia a ellos

// clearTimeout o clearInterval

// como detener intervalos

// setTimeout(() => {
//   clearInterval( interval1Id ) // como lo detemos a los 10 segundos

// }, 5000)

let control = 0;

let interval2Id = setInterval(() => {
  console.log("TIK TOK")
  console.log(control)
  control++
  // condicional
  if (control >= 6) {
    clearInterval(interval2Id)
  }

}, 1000)


