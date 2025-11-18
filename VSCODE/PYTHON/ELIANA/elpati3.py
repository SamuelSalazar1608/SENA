#Cajero automatico
saldo = 1000000
print("Bienvenido al cajero automatico")
while True:
    print("opciones\n 1-consultar saldo\n 2-retirar dinero\n 3-consignar dinero\n 4-salir ")
    opcion = (input("ingresar opcion: "))
    if opcion == "1":
        print(f"tu saldo es de {saldo}")
    elif opcion == "2":
        retiro = int(input("Monto a retirar: "))
        if retiro > saldo:
            print("saldo insuficiente")
        else:
            saldo -= retiro
            print(f"retiro exitoso, saldo actual: {saldo}")   
    elif opcion == "3":
        consignar = int(input("saldo a consignar: "))
        saldo += consignar
        print(f"consignacion exitosa, saldo actual: {saldo}")  
    elif opcion == "4":
        print("Vuelva pronto")
        break
    else:
        print("opcion no valida")

#Numero al reves

numero = input("Ingrese un numero entero: ")
cadenanum = str(numero)
cadena_invertida = cadenanum[::-1]
numero_invertido = int(cadena_invertida)
print(numero_invertido )

#calculadora
while True:
    
    print("Que operacion quieres hacer")
    print("\n 1-suma\n 2-resta\n 3-multiplicacion\n 4-division\n 5-salir")
    opciones = input("ingresa la opcion:")

    if opcion == "5":
        print("gracias por utilizar la calculadora")
        break

    num1 = eval(input("ingrese el primer numero: "))
    num2 = eval(input("ingrese el segundo numero: "))

    if opciones == "1":
        suma = num1 + num2
        print(suma)
    elif opciones == "2":
        resta = num1 - num2
        print(resta)
    elif opciones == "3":
        multiplicacion = num1 * num2
        print(multiplicacion)
    elif opciones == "4":
        division = num1 / num2
        print(division)
    else:
        print("ingresa un valor valido")

