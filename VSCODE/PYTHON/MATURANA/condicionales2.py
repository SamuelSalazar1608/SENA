import random as r

numero = r.randint(-100,100)
numero = eval(input("ingrese un numero: "))

if  numero > 0:
    print(f"el numero {numero} es positivo")
elif numero > - 10:
    print("es negativo pero chiquito")
else:
    print("que negativo tan grande")