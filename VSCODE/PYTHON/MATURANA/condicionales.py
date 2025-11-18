import random as r
#numero = r.randint(0,100)
numero = eval(input("Ingrese un numero: "))

if numero > 0:
    if numero %2 == 0:
        numero += 10
        print(f"el numero aleatorio mas 10 es {numero}")
    else:
        print(f"el numero {numero} es impar")
else:
    numero *= -1
print(f"el numero ahora es {numero}")