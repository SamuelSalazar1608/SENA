/* Samuel Salazar Alzate, 3022456993, samuelsalazar1608@gmail.com */

/* ----------------------------------- */
/*  NUMEROS Y OPERACIONES MATEMATICAS  */
/* ----------------------------------- */

//1. TIPO ENTERO Y DECIMAL
const NumeroEntero = 10 //NUMBER
const NumeroDecimal = 3.14 //NUMBER

//2. NOTACION
const Cientifica = 5e3 //5000
console.log(typeof Cientifica)

//3. INFINITOS Y NAN
const NumeroInfinito = Infinity
console.log(typeof NumeroInfinito)

const NumeroNaN = NaN
console.log(NumeroNaN)

/* ------------------------- */
/*  OPERACIONES MATEMATICAS  */
/* ------------------------  */

const suma = 5 + 9 //14
const Resta = 10 - 8 //2
const Division = 10 / 5 // 2
const Multiplicacion = 8 * 8 //64
const Potencia = 2 ** 5 // 32
const Modulo = 5 % 2 //1

/* -------------------------------- */
/*  OPERACIONES AVANZADAS CON MATH  */
/* -------------------------------  */

const RaizCuadrada = Math.sqrt(25) //5
const ValorAbsoluto = Math.abs(-25)//25
const NumeroRandom = Math.random()// [0, 1]

console.log(RaizCuadrada)
console.log(ValorAbsoluto)
console.log(NumeroRandom)

//PRECISION

const Resultado = 0.1 + 0.2 //0.3
console.log(Resultado)
console.log(Resultado. toFixed(1))
console.log(Resultado == 0.3)//false
console.log(Resultado.toFixed(1) == 0.3)//true
console.log(Resultado.toFixed(1) === 0.3)//false

/* ---------------------------------- */
/*  TYPE CASTING O CONVERSION DE TIPO */
/* ---------------------------------- */

//EXPLICITO
const NumeroString = '42'
const NumeroNumber = parseInt(NumeroString)
console.log(NumeroString, NumeroNumber)

const NumeroFloat = '3.4'
const FloatNumber = parseFloat(NumeroFloat)
console.log(FloatNumber)

const NumeroBinario = '1111'
const BinarioNumber = parseInt(NumeroBinario)
console.log(BinarioNumber)

//IMPLICITO

const SumaNumero = '5' + 4
console.log(SumaNumero)

const SumaBooleano = '8' + true
console.log(SumaBooleano)

const SumaNumber = 5 * true
console.log(SumaNumber)

//EJEMPLO
const Precision = 0.1 + 0.2
const PrecisionFix = Precision.toFixed(1) //TYPE IMPLICITO 
//EXPLICITO
const PrecisionFixNumber = parseFloat(PrecisionFix)
console.log(typeof PrecisionFixNumber, PrecisionFixNumber)

const SumaString = '25'
const SumaNumer = 25
const Sumaboolean = false

