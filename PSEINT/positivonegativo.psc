Algoritmo positivonegativo
	Definir n Como Entero
	Escribir "ingrese numeros"
	Leer n
	contadorpositivos <- 1
	Mientras n >= 1 Hacer
		Repetir
			escribir "ingrese siguiente  numero"
			leer n
		Hasta Que n < 1
		contadorpositivos <- contadorpositivos + 1
	Fin Mientras
	Escribir "ha digitado" , contadorpositivos , "numeros positivos"
	
FinAlgoritmo
