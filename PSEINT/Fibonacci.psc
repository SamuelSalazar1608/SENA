Algoritmo Fibonacci
    Definir a, b, c, i Como Entero
    a <- 0
    b <- 1
    Escribir "Los primeros 10 numeros de Fibonacci son:"
    Escribir a
    Escribir b
    
    Para i <- 3 Hasta 10 Con Paso 1 Hacer
        c <- a + b
        Escribir c
        a <- b
        b <- c
    FinPara
FinAlgoritmo

