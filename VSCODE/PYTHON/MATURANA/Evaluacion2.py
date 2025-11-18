#generar un  numero aleatorio y el usuario debe de adivinar
import random as r
x = True
while x :
    numero = r.randint(0, 15)
    numDEusu = int(input("Adivina el numero que elegi: "))
    if numero == numDEusu:
        print(f"el numero {numDEusu} que adivinaste es correcto")
        x = False
    else:
        print(f"el numero {numDEusu} que digitaste no es el correcto era {numero}")

import random as r
numero = r.randint(0, 10)
numDEusu = int(input("Adivina el numero que elegi: "))
if numero == numDEusu:
    print(f"el numero {numDEusu} que adivinaste es correcto")
else:
    print(f"el numero {numDEusu} que digitaste no es el correcto era {numero}")