dolares = eval(input("ingrese la cantidad de dolares que tiene en su bolsillo derecho: "))
pesos = eval(input("ingrese la cantidad de pesos que tiene en su bolsillo izquierdo: "))


pago_dvd = 15
pasaje = 4000
recibo_luz = 122000
libro = 26
le_pagaron = 7
almuerzo = 35000
le_pagaron_2 = 14000
entradas = 26000

total_dolares = (dolares+le_pagaron-pago_dvd-libro) 
total_pesos = (pesos+le_pagaron_2-pasaje-recibo_luz-almuerzo-entradas)



print(f"le quedaron {total_dolares} dolares y {total_pesos} pesos")