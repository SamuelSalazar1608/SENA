Algoritmo Numero_N
	DEFINIR n Como Entero
	Definir i, contador Como Entero
	contador=0
	escribir "Ingrese un Numero y le mostraremos los numeros pares y cuantos"
	leer n
	Escribir "Números pares hasta ", N, ":"
	Para i<-1 Hasta n Con Paso 1 Hacer
		
		si i mod 2=0 Entonces
			escribir i
			contador<- contador + 1
		FinSi
	Fin Para
	
	escribir "El numero total de pares es :", contador
FinAlgoritmo
