#Crie um programa que leia um vetor de 20 números inteiros e em seguida divida estes números em 
# outros 2 novos vetores, separando os números pares dos números ímpares.

vetPar = []
vetImpar = []

N = int(input('Entre com 20 numeros inteiros: '))
notas = 0
for i in range(N):
    if (N %2) == 0:
        print('É par')
        vetPar.append(N[i])
    else:
        print('é impar')
        vetImpar.append(N[i])

print(vetPar)
print(vetImpar)