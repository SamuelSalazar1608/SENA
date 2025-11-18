/* Samuel Salazar Alzate, 3022456993, samuelsalazar1608@gmail.com */
 
/* --------------------------------- */
/*           IMPRIMIR                */
/* --------------------------------- */

console.log('Hola Mundo')

/* --------------------------------- */
/*           VARIABLES               */
/* --------------------------------- */

//LET variable cambiante
let CofreAndy = 'woody'

console.log(CofreAndy)

//CONST variable no cambiante
const NUMEROPI = 3.14

console.log(NUMEROPI)

/* --------------------------------------- */
/* TIPOS DE DATOS - PRIMITIVOS Y COMPLEJOS */
/* --------------------------------------- */

/* PRIMITIVOS           COMPLEJOS
   -String              -Array                
   -Number              -Object
   -Boolean             -Function
   -Null
   -Undefined
   -Symbol
   -Bigint 
*/

//Ejemplo Primitivos
let NombreUsuario = 'Samuel' //String
let EdadUsuario = 17 //Number
let MayorDeEdad = false //Boolean
let ValorNull = null //Null
let ValorUndefined = undefined //Undefined
let UniqueSymbol = Symbol('Unico') //Symbol
let NumeroGrande = 2n //Bigint
console.log('----------------------------------')
console.log(typeof NombreUsuario, NombreUsuario)//Para saber el tipo de dato
console.log(typeof EdadUsuario, EdadUsuario)
console.log(typeof MayorDeEdad, MayorDeEdad)
console.log(typeof ValorNull, ValorNull)
console.log(typeof ValorUndefined, ValorUndefined)
console.log(typeof UniqueSymbol, UniqueSymbol)
console.log(typeof NumeroGrande, NumeroGrande)



//Ejemplo Complejos

//Array
let ListaDeFrutas = ['Mango', 'Piña', 'Manzana Verde', 'Pera', 'Fresa', 'Uva'] 

//Objetos, Tienen Propiedades o Claves: Valores
let AlumnoSamuel = {
    Nombre: 'Samuel',
    Edad: 17,
    Ciudad: 'Medellin',
    Sexo: 'Masculino'
}

//Function
let Funcion = function NombreDeLaFuncion(){}

console.log('----------------------------------')
console.log(typeof ListaDeFrutas, ListaDeFrutas)
console.log(Array.isArray(ListaDeFrutas))//Para confirmar que es un array
console.log(typeof AlumnoSamuel, AlumnoSamuel)
console.log(typeof Funcion, Funcion)

/* ----------------------- */
/* MANIPULACION DE STRINGS */
/* ----------------------- */

let StringUno = 'Hola'
let StringDos = 'Bebe'
let StringTres = 'Hermosa'
let StringCuatro = `${StringUno} ${StringDos} ${StringTres}`//Concatenacion con comilla invertida
console.log(StringUno)
console.log(StringDos)
console.log(StringTres)
console.log(StringCuatro)

//Concatenar
console.log(StringUno + ' ' +StringDos)
console.log(StringUno, StringDos)

let Frase = 'El viernes full perreo obsceno'

console.log(Frase.length) //Tamaño
console.log(Frase.toLowerCase())//Minuscula
console.log(Frase.toUpperCase())//Mayuscula
console.log(Frase.substring(42, 52))//Extraer una parte del texto
console.log(Frase.substring(42, Frase.length))


