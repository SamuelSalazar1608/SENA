Algoritmo Numeros_ingresados
    Definir num, suma, contador Como Entero
    Definir promedio Como Real
    suma <- 0
    contador <- 0
    
    Escribir "Ingrese un numero (0 para terminar): "
    Leer num
    
    Mientras num <> 0 Hacer
        suma <- suma + num
        contador <- contador + 1
        Escribir "Ingrese otro numero (0 para terminar): "
        Leer num
    FinMientras
    
    Si contador > 0 Entonces
        promedio <- suma / contador
        Escribir "El promedio de los numeros ingresados es: ", promedio
    SiNo
        Escribir "No ingreso ningun numero valido."
    FinSi
FinAlgoritmo
