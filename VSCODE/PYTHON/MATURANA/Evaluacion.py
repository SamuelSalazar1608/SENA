#escribir codigo que le solicite al usuario que ingrese sus datos basicos 
#(nombre,apellido,edad,identificacion,estatura,email)
#mostrar los datos

nom = input("ingrese su nombre: ")
apell = input("ingrese sus apellidos: ")
id = int(input("ingrese su numero de identificacion: "))
edad = int(input("ingrese su edad: "))
estatura = float(input("ingrese su estatura: "))
email = input("ingrese su email: ")

print("-----------------------------------------")
print("los datos ingresados por el usuario son ")
print("-----------------------------------------")
print(f"El nombre del usuario es: {nom}\nLos apellidos del usuario son: {apell}\nEl numero de identificacion del usuario es: {id}\nLa edad del usuario es: {edad}\nLa estatura del usuario es: {estatura}\nEl email del usuario es: {email}")

