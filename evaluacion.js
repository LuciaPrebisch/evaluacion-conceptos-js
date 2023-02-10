/* Evaluación de conocimientos básicos en JS.

1) Guarda tu proyecto en tu github con el nombre evaluacion-conceptos-js
2) Por cada ejercicio harás un commit en donde reflejarás con la descripción el número de ejercicio.
3) Resolvé usando prompt, alert y condicionales:
a) Pida al usuario su nombre y muestre un mensaje de bienvenida.
b) Pida al usuario dos números y muestre su suma.
c) Pida al usuario dos números y muestre el mayor.
d) Pida al usuario tres números y muestre una leyenda que diga si los tres son iguales, sino lo son que también lo informe.
e) Pida al usuario tres números y muéstrelos ordenados de mayor a menor. 
f) Pida al usuario su peso en kg y su altura en metros y muestre su índice de masa corporal (IMC): Peso (en Kg) / (Altura (en metros) al cuadrado).
Si el número esta por debajo de 18.5 mostrá la leyenda "Bajo peso"
Si el número esta entre 18.6 y 24.9  mostrá la leyenda "Normal"
Si el número esta entre 25 y 29.9  mostrá la leyenda "Sobrepeso"
Si el número esmayor a 30 mostrá la leyenda "Obesidad"

// a
let usuario = prompt ("Ingrese su nombre")
console.log (" Bienvenida " + usuario)

// b
let numero1 = parseInt (prompt ("Ingrese un numero"))
let numero2 = parseInt (prompt ("Ingrese un numero"))
let resultado = numero1 + numero2 
alert(resultado) 

//c 
let Numero1 = parseInt ( prompt ("Ingrese un numero"))
let Numero2 = parseInt ( prompt ("Ingrese un numero"))

if (Numero1>Numero2) {
    alert(Numero1)
} 
if (Numero1<Numero2) {
    alert(Numero2)
}

//d

let numeroA = parseInt (prompt ("Ingrese un numero"))
let numeroB = parseInt (prompt ("Ingrese un numero"))
let numeroC = parseInt (prompt ("Ingrese un numero"))

if (numeroA === numeroB && numeroA === numeroC) {
    alert ("Los 3 numeros son iguales")
} else {
    numeroA !== numeroB && numeroA !== numeroC
    alert ("Los numeros no son iguales")
}




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



/* f

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
*/




