/* Evaluación de conocimientos básicos en JS.

1) Guarda tu proyecto en tu github con el nombre evaluacion-conceptos-js
2) Por cada ejercicio harás un commit en donde reflejarás con la descripción el número de ejercicio.
3) Resolvé usando prompt, alert y condicionales:
a) Pida al usuario su nombre y muestre un mensaje de bienvenida.
b) Pida al usuario dos números y muestre su suma.
c) Pida al usuario dos números y muestre el mayor.
d) Pida al usuario tres números y muestre una leyenda que diga si los tres son iguales, sino lo son que también lo informe.
e) Pida al usuario tres números y muéstrelos ordenados de mayor a menor. */


// a
let usuario = prompt ("Ingrese su nombre")
console.log (" Bienvenida " + usuario)

// b
let numero1 = parseInt (prompt ("Ingrese un numero"))
let numero2 = parseInt (prompt ("Ingrese un numero"))
let resultado = numero1 + numero2 
console.log(resultado) 


//c 
let Numero1 = parseInt ( prompt ("Ingrese un numero"))
let Numero2 = parseInt ( prompt ("Ingrese un numero"))
let Resultado = Numero1 > Numero2 
console.log( " El " + Numero1 + " es mayor que " + Numero2)

//d

let numeroA = parseInt (prompt ("Ingrese un numero"))
let numeroB = parseInt (prompt ("Ingrese un numero"))
let numeroC = parseInt (prompt ("Ingrese un numero"))

if (numeroA === numeroB === numeroC) {
    console.log ("Los 3 numeros son iguales")
} else {
    numeroA !== numeroB 
    console.log("Los numeros no son iguales")
}

