Algoritmo NumeroPrimo
    Definir num, i, contadorDiv Como Entero
    Escribir "Ingrese un numero: "
    Leer num
    contadorDiv <- 0
    
    Para i <- 1 Hasta num Hacer
        Si num % i = 0 Entonces
            contadorDiv <- contadorDiv + 1
        FinSi
    FinPara
    
    Si contadorDiv = 2 Entonces
        Escribir num, " es un numero primo"
    SiNo
        Escribir num, " NO es un numero primo"
    FinSi
FinAlgoritmo

