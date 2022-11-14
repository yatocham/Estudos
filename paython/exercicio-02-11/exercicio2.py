# Faça um programa que preencha um vetor de N elementos inteiros com a sequência de Fibonacci
#  (primeiro elemento é 1, segundo é 1 e em seguida, cada termo subsequente é a soma dos dois anteriores).

termo = []

ELEMENTOS = int(input('Entre com uma quantidade de elementos: '))

termo1 = 1
termo2 = 2
termo3 = 0

for i in range(ELEMENTOS): 
    if ELEMENTOS < termo3:
        termo3 = termo1 + termo2

    termo+= 1

print(termo1)
print(termo2)
print(termo3)
print(termo)