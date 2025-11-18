#CASINO

'''import random as r

dinero = int(input("Ingrese cantidad de dinero:"))

num1 = r.randint(0,4)
num2 = r.randint(0,4)
num3 = r.randint(0,4)

print("Tus numeros son", num1, num2, num3)

if num1 == num2 == num3:
    print(f"Ganaste {dinero*3}")
    
elif num1 == num2 or num2 == num3 or num1 == num3:
    print(f"Ganaste {dinero*1.5}")
    
else:
    print("Perdiste tu dinero")'''
    
#CICLOS

'''num = 1 
while num <=7:
    print(num, end = "")
    num += 1
    
    
num = 23
while num >=-7:
    print(num, end = "")
    num -= 6
    
    
num = 10
while num >=-0:
    print(num)
    num -= 1
    
    
num = 11
while num <= 34:
  num += 1
  if(num % 2 == 0):
    print(num, end = "")
    

num = 1 
while num <= 49:
    num =+1
    if (num % 3 == 0):
        print(num)
        
    
num = 1
while num <= 99:
  num += 1
  if(num % 3 == 0 and num % 4 == 0):
    print(num)
    
num = 1 
while num <=99:
    num += 1
    if (num <50 and num <65):
        print(num, end = "")
        
#ACUMULADORES 

suma = 0 
i = 1 
while i <= 10:
    suma = suma +i
    i = i+1
    print("suma =", suma)
    
#SALARIOS 

usuario = 1 
suma = 0 
while usuario <= 10:
    valor = int(input(f"usuario {usuario}"))
    suma += valor
    usuario += 1

print(f"El promedio de los valores de los 10 usuarios es: {suma / 10}")'''