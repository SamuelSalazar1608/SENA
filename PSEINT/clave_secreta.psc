Algoritmo clave_secreta
	clave_correcta = "SENA2025"
	intentos = 0
	clave_ingresada = ""
	
	REPETIR
		Escribir "Introduce la clave:"
		Leer clave_ingresada
		intentos = intentos + 1
		
		SI clave_ingresada == clave_correcta ENTONCES
			Escribir "Acceso permitido"
		FIN SI
		SI intentos == 3 Y clave_ingresada <> clave_correcta ENTONCES
			Escribir "Acceso denegado"
		FIN SI
	HASTA QUE intentos == 3 O clave_ingresada == clave_correcta
	SI clave_ingresada <> clave_correcta Y intentos == 3 ENTONCES
		Escribir "Acceso denegado"
	FIN SI
FinAlgoritmo
