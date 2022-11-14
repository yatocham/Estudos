#  Fazer um programa que calcule a soma dos elementos de um vetor.

vet = []

N = int(input('Entre com uma quantidade: '))
soma = 0
for i in range(N):
    vet.append(int(input('Entre com um número: ')))
    soma += vet[i]

print(vet)
print(soma)

# Fazer um programa que calcule a média e os elementos acima da média

elementos = []

N = int(input('Entre com uma quantidade: '))
soma = 0
for i in range(N):
    vet.append(int(input('Entre com um elemento: ')))
    soma += vet[i]

media = soma / N

cont = 0
for i in range(N):
    if vet[i] > media:
        cont += 1

print(vet)
print(soma)
print(media)
print(cont)

print(len(vet))



