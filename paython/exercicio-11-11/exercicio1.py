#Fazer um programa que armazene números em um vetor até que o usuário digite 0 (zero).
#Depois, substitua todas as ocorrências de valores positivos por 1 e de valores negativos por 0.

# vetor = []



numeros = []

for i in range(5):
    x = int(input('digite um valor: '))
    if x != 0:
        numeros.append(i)
    else:
        print('Programa finalizado')

print(
    numeros
)

# numero = input('Insita um número')
# while numero:
#     numero != 0
#     vetor.append(numero)




# for i in range(5):
#     vetor.append(int(input('Digite um número')))
#     for i in range(5):
#         if (vetor[i] == 0): 'deu pau'

# def igualZero(vetor):

     
#     for i in range(5):
#         if (vetor[i] > maior):
#             maior = vetor[i]
#     return maior

# resultado = maiorElemento(vetor)

# print(resultado) 


