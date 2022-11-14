# Fazer um programa que leia um vetor de 20 números inteiros e determine qual o maior e o menor número
#  do vetor e imprima os dois valores.

vet = []

N = int(input('Entre com uma quantidade: de numeros no vetor (20) '))
maior = 0
menor = 0
for i in range(N):
    if (N[i] < menor) :
        menor = N[i]
    else:
        maior = N[i]

print(vet)