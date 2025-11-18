#Juego piedra, papel o tijeras
import random

def OpcionJugador():
    while True:
        opcion = input("\nElige una opcion \n-piedra \n-papel \n-tijera \n-salir \nDigita una opcion: ").lower()

        if opcion == "piedra" or opcion == "papel" or opcion == "tijera" or opcion == "salir":
            return opcion
        else:
            print("Opción no válida, intenta de nuevo.")

def Ganador(jugador, compu):
    if jugador == compu:
        return "empate"
    elif (jugador == "piedra" and compu == "tijera") or \
         (jugador == "papel" and compu == "piedra") or \
         (jugador == "tijera" and compu == "papel"):
        return "ganaste"
    else:
        return "perdiste"

def Contador():
    puntaje_jugador = 0
    puntaje_compu = 0

    print("Bienvenido a Piedra, Papel o Tijera")
    usuario = input("Ingresa tu nombre:")
    while True:
        jugador = OpcionJugador()
        if jugador == "salir":
            break

        compu = random.choice(["piedra", "papel", "tijera"])
        print(f"La computadora escogió: {compu}")

        resultado = Ganador(jugador, compu)

        if resultado == "ganaste":
            puntaje_jugador += 1
            print("Ganaste esta ronda.")
        elif resultado == "perdiste":
            puntaje_compu += 1
            print("Perdiste esta ronda.")
        else:
            print("Empate.")

        print(f"Puntaje = {usuario}: {puntaje_jugador}  Computadora: {puntaje_compu}")

    print("\n-----PUNTAJE FINAL-----")
    print(f"{usuario}: {puntaje_jugador}  Computadora: {puntaje_compu}")

    if puntaje_jugador > puntaje_compu:
        print("GANASTE EL JUEGO")
    elif puntaje_jugador < puntaje_compu:
        print("PERDISTE EL JUEGO")
    else:
        print("FUE UN EMPATE")

    print("Gracias por jugar")

Contador()



    

    



