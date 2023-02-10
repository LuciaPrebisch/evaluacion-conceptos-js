/* Evaluación de conocimientos básicos en JS.

// a
let usuario = prompt ("Ingrese su nombre")
console.log (" Bienvenida " + usuario)

// b
let numero1 = parseInt (prompt ("Ingrese un numero"))
let numero2 = parseInt (prompt ("Ingrese un numero"))
let resultado = numero1 + numero2 
alert(resultado) 

// c 
let Numero1 = parseInt ( prompt ("Ingrese un numero"))
let Numero2 = parseInt ( prompt ("Ingrese un numero"))

if (Numero1>Numero2) {
    alert(Numero1)
} 
if (Numero1<Numero2) {
    alert(Numero2)
}

// d
let numeroA = parseInt (prompt ("Ingrese un numero"))
let numeroB = parseInt (prompt ("Ingrese un numero"))
let numeroC = parseInt (prompt ("Ingrese un numero"))

if (numeroA === numeroB && numeroA === numeroC) {
    alert ("Los 3 numeros son iguales")
} else {
    numeroA !== numeroB && numeroA !== numeroC
    alert ("Los numeros no son iguales")
}


// e (ejercicio no resuelto)

let NumeroA = parseInt (prompt ("Ingrese un numero"))
let NumeroB = parseInt (prompt ("Ingrese un numero"))
let NumeroC = parseInt (prompt ("Ingrese un numero"))

let NumeroS = [NumeroA , NumeroB , NumeroC]

if (NumeroA > NumeroB && NumeroA > NumeroC) {
    console.log (NumeroA)
}
 // no sabe como hacerlo. Si uso este metodo tengo infinitas condiciones 

// si armo un array con for, recorro elemento por elemento pero no se como ordenarlo 
for (let posicion = 0 ; posicion < NumeroS.length ; posicion++ ) {
    console.log(NumeroS [posicion] )
}


//  f
let peso = parseInt (prompt ("Ingrese su peso en kg"))
let altura = parseInt (prompt ("Ingrese su altura en metros"))
let IMC = parseInt (peso / (altura^2) )

alert( " Su IMC es de " + IMC)

if (IMC<18,5) {
    console.log ("Bajo peso")
} 
if (IMC>18,6 && IMC<24,9) {
    console.log ("Normal") }
if (IMC>25 && IMC<29,9) {
    console.log ("Sobrepeso")
}
if (IMC>30) {
    console.log ("Obesidad")
}


// 4 incompleto

let num1 = parseInt (prompt("Ingrese un numero"))
console.log(num1)

if (num1 === "" ) {
    console.error("ingrese un valor numerico"); 
    
}

*/

// 5 

let dias = ["Lunes" , "Martes" , "Miercoles" , "Jueves" , "Viernes" , "Sabado" , "Domingo"]
let posicion 

for (let posicion = 0 ; posicion < dias.length ; posicion ++) {
    console.log (dias [posicion])

if (dias [posicion === 5]  && dias [posicion === 6] ) {
    console.log ("Fin de semana")
}
}

