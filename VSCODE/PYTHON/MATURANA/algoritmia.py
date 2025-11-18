"""#Ejercicio 1
minutos = int(input("Ingrese la cantidad de minutos: "))

horas = minutos // 60
resto = minutos % 60

print(f"{minutos} minutos equivalen a {horas} horas y {resto} minutos.")
#Ejercicio 2
numero = int(input("Ingrese un número entero: "))

print(f"Tabla de multiplicar del {numero}:")
for i in range(1, 11):
    print(f"{numero} x {i} = {numero * i}")
"""
"""#Ejercicio 3
valor_compra = float(input("Ingrese el valor de la compra: "))

if valor_compra > 100000:
    descuento = valor_compra * 0.10
    total = valor_compra - descuento
else:
    total = valor_compra

print(f"El total a pagar es: {total}")
"""
"""#Ejercicio 4
num1 = int(input("Ingrese el primer número: "))
num2 = int(input("Ingrese el segundo número: "))
num3 = int(input("Ingrese el tercer número: "))

mayor = num1
if num2 > mayor:
    mayor = num2
if num3 > mayor:
    mayor = num3

print(f"El número mayor es: {mayor}")"""

#Ejercicio 5
N = int(input("Ingrese un número N: "))

for i in range(1, N + 1):
    if i % 2 == 0:
        print(f"{i} es par")
    else:
        print(f"{i} es impar")
