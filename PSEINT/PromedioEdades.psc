Algoritmo PromedioEdades
    Definir edad, suma, contador Como Entero
    Definir promedio Como Real
    suma <- 0
    
    Para contador <- 1 Hasta 6 Con Paso 1 Hacer
        Escribir "Ingrese la edad de la persona ", contador, ": "
        Leer edad
        suma <- suma + edad
    FinPara
    
    promedio <- suma / 6
    Escribir "El promedio de edades es: ", promedio
FinAlgoritmo
