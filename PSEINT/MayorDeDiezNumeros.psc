Algoritmo MayorDeDiezNumeros
    Definir num, mayor, contador Como Entero
    contador <- 1
    mayor <- -99999  
    
    Mientras contador <= 10 Hacer
        Escribir "Ingrese el numero ", contador, ": "
        Leer num
        Si num > mayor Entonces
            mayor <- num
        FinSi
        contador <- contador + 1
    FinMientras
    
    Escribir "El numero mayor es: ", mayor
FinAlgoritmo
