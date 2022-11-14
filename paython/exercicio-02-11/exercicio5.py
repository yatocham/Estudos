# Crie um programa que permita a leitura de um vetor de 30 números inteiros e gere um segundo vetor com os mesmos dados,
# só que de maneira invertida, ou seja, o primeiro elemento do vetor original ficará na última posição do novo vetor,
# o segundo na penúltima posição e assim por diante.

vet = []

N = int(input('Entre com uma quantidade: de numeros no vetor '))

for i in range(30):
    vet = N[0] - N[30]  
print(vet)
