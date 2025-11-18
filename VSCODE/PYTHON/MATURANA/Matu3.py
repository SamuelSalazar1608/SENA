'''suma = 0
i = 0

while i <= 10:
    suma += i
    i += 1
print(f"la suma de todas las iteraciones es:", suma)

""" Realice un programa que lea a 10 usuario, de manera que a cada uno
    le pida el valor de su salario. Al final usted debe indicar cuál es el
    promedio de los salarios.
"""
AcumuladorSalario = 0
Contador = 1

while cont <= 10:
    Salario = eval(input("Ingrese su salario mensual: "))
    AcumuladorSalario += Salario
    Contador += 1
print(Contador)

print("El promedio del salario mensual es: ", AcumuladorSalario/10)


'''

#Ejercicios Evaluativos

''' 1. Realice un programa que sume los números impares entre el 0 y el 30 e imprima el
    resultado de la suma.
'''


'''Suma = 0
Contador = 0

while Contador <= 30:
    if Contador % 2 !=0:
        Suma += Contador
    Contador += 1
print("La suma de los numeros impares es: ", Suma)'''


''' 2. Realice un programa que pida al usuario 10 números enteros (debe leerlos uno a
    uno), y luego muestre en pantalla la suma de todos los números ingresados por el usuario.
'''

'''Suma = 0
Contador = 1


while Contador <= 10:
    Numero = eval(input(f"Dame el numero {Contador} entero: "))
    Suma += Numero
    Contador += 1
print(f"El resultado es: {Suma}")'''
 
''' 3. Realice un programa que le pida al usuario 10 nombres, y cuente cuantas veces
    escribió el nombre “Juan” (valide para que cuente a Juan, sin importar los cambios
    tipográficos de mayúsculas o minúsculas).
'''
'''Contador = 1
Acumulador = 0

while Contador <= 10:
    Nombre = input("ingrese su nombre:").upper()
    if Nombre == "JUAN":
        Acumulador +=1
    Contador +=1
print("El nombre Juan fue digitado:",Acumulador ,"Veces")'''

''' 4. ¿Recuerdas el juego de apostar un dinero y que dados 3 números ganaba 3 veces lo
    apostado, una vez y media, o perdía todo? Te propongo un reto, que tal si tomamos
    ese juego, y lo organizamos para que el usuario al correrlo pueda jugar 5 veces y
    luego de esas 5 veces le mostremos con cuánto dinero terminó.
'''
import random as r

dinero = int(input("Ingrese cantidad de dinero: "))
contador = 1
total = dinero  

while contador <= 5:
    print(f"\nRonda {contador}:")
    num1 = r.randint(0, 4)
    num2 = r.randint(0, 4)
    num3 = r.randint(0, 4)
    print("Tus números son", num1, num2, num3)

    if num1 == num2 == num3:
        ganancia = dinero * 3
        print(f"Ganaste {ganancia}")
        total += ganancia
    elif num1 == num2 or num2 == num3 or num1 == num3:
        ganancia = dinero * 1.5
        print(f"Ganaste {ganancia}")
        total += ganancia
    else:
        print("No ganaste nada")
        total -= dinero  

    contador += 1

print(f"\nTerminaste con {total}")

''' 5. Realice un programa que lea N empleados de una fábrica, y a cada uno le pida,


    nombre, edad, salario, gastos mensuales.
        a. Muestre cuánto suma el salario resultante (salario - gastos mensuales) de
        todos los empleados.
        b. Indique a cuántos empleados, sus gastos superan el salario.
'''


n = int(input("Ingrese la cantidad de empleados: "))

i = 0
SumaResultante = 0
ContadorGastosMayores = 0

while i < n:
    print(f"\nEmpleado {i + 1}:")
    Nombre = input("Nombre: ")
    Edad = int(input("Edad: "))
    Salario = float(input("Salario: "))
    Gastos = float(input("Gastos mensuales: "))

    SalarioResultante = Salario - Gastos
    SumaResultante += SalarioResultante

    # Contar empleados con gastos mayores al salario
    if Gastos > Salario:
        ContadorGastosMayores += 1

    i += 1


print("Suma total de los salarios resultantes:", SumaResultante)
print("Número de empleados con gastos mayores al salario:", ContadorGastosMayores)
