console.log("probando manipular el dom")


console.log(document)


// Como buscamos un elemento de la vista (DOM o documento) para modificarlo

// querySelector => busca EL PRIMER elemento que cumpla la condicion

let h1Node = document.querySelector("h1") // añadimos que tipo de etiqueta estamos buscando

console.log(h1Node) // la referencia al elemento que está siendo visualizado

console.log(h1Node.innerText)


// hacemos una modificacion


// estas modificaciones se hará de dos FORMAS

// 1. a traves de efectos automatizados
setTimeout(() => {
  h1Node.innerText = "Cambiando DOM con timeout";
}, 2000)

// setInterval(() => {
//   let h2Node = document.querySelector("h2")
//   h2Node.innerText = Number(h2Node.innerText) + 1;
//   // h2Node.innerText++;
//   console.log("aumento el timer")
//   // document.querySelector("h2").innerText++
// }, 1000)

// 2. a traves de acciones hechas por el usuario
let isPressed = false;

let buttonNode = document.querySelector("button")
console.log(buttonNode)
buttonNode.addEventListener("click", () => {
  if (isPressed === false) {
    h1Node.innerText = "Cambiando el DOM con un button";
    isPressed = true
  } else {
    h1Node.innerText = "Aprendiendo DOM";
    isPressed = false
  }
})


// seleccionar por id o class

document.querySelector("#my-title").innerText = "patata"

let algo = document.querySelector(".some-text")
console.log(algo)
algo.innerText = "nuevo valor parrafo"



// querySelectorAll => buscar varios elementos que cumplan una condicion

let allParagraphsNodeList = document.querySelectorAll(".some-text")
console.log(allParagraphsNodeList)

// querySelectorAll crea una Lista de Nodos (NodeList)
// NodeList se comporta como un Array
// NodeList NO ES UN ARRAY
// NodeList tendrá algunos metodos y propiedades similares a arrays, pero NO podemos hacer uso de todos los metodos que aplicarian para arrays (filter, reduce, reverse, sort, slice, splice)


allParagraphsNodeList[2].innerText = "cambiando tercer parrafo";

// podemos hacer bucles
// 1. for
// 2. for of
// 3. forEach

allParagraphsNodeList.forEach((eachNode) => {
  eachNode.innerText = "Cambiando el texto con forEach"
})

allParagraphsNodeList[allParagraphsNodeList.length - 1].innerText = "cambiando texto con .length - 1";


// existen otros metodos para hacer busquedas más descriptivos


document.getElementById("my-title")
let htmlCol = document.getElementsByClassName("some-text") // => retorna una HTML collection que no es tan avanzado con una NodeList
document.getElementsByTagName("h1")

// si usamos cualquier de los anteriores, no podemos usar forEach


// Crear y removed elementos de DOM (Nodos)

// createElement para crear
let newElementNode = document.createElement("h3")
console.log(newElementNode)
newElementNode.innerText = "Elemento nuevo!"

// append para añadir un Nodo a otro

// document.querySelector("#empty-container").append(document.createElement("h4"))
let emptyContainerNode = document.querySelector("#empty-container")

// dondeVoyAAñadirlo.append(elElementoAAñadir)
emptyContainerNode.append(newElementNode)

// .remove()

setTimeout(() => {
  newElementNode.remove() // luego de 3 segundos lo remuevo del DOM
}, 3000)


