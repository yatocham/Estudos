# Crie um programa que leia um vetor de 30 números inteiros e gere um segundo
# vetor cujas posições pares são o dobro do vetor original e as ímpares são o triplo.


vet = []

N = int(input('Entre com uma quantidade: de numeros no vetor '))

for i in range(N):
    if (N %2) == 0:
        print('É par')
        vet.append(vet[i] * 2)
    else:
        print('é impar')
        vet.append(vet[i] * 3)

print(vet)