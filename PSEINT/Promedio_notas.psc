Algoritmo Promedio_notas
	Definir nota, suma, promedio Como Real
	Definir i Como Entero
	
	suma <- 0
	
	Para i <- 1 Hasta 5 Con Paso 1 Hacer
		Escribir "Ingrese la nota ", i, ": "
		Leer nota
		suma <- suma + nota
	FinPara
	
	promedio <- suma / 5
	
	Escribir "El promedio de las notas es: ", promedio
	
	Si promedio >= 3.0 Entonces
		Escribir "Resultado: APROBADO"
	SiNo
		Escribir "Resultado: REPROBADO"
	FinSi
FinAlgoritmo
