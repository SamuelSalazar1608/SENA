cadapayaso = 112
cadamuñeca = 75

numpayasos = int(input("ingrese la cantidad de payasos vendidos: "))
nummuñecas = int(input("ingrese la cantidad de muñecas vendidas: "))

pesototal = (numpayasos * cadapayaso) + (nummuñecas * cadamuñeca)

print(f"el peso total del pedido es de {pesototal} gramos")