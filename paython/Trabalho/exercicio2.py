# A MODA de um vetor de números é o número m no vetor que é repetido com maior frequência.
# Se mais de um número for repetido com frequência máxima igual, não existirá uma moda.
# Escreva uma função que aceite um vetor de números e retorne a moda ou uma indicação de que
# a moda não existe.

# moda = []

# for i in range(5):
#     moda.append(int(input('Digite um número')))


# for i in range(len(moda)):
#     moda[i] 


moda = [1,2,3,3,3,4,4,4,5]
cont = 0
cont2 = 0

for i in moda:
    for j in moda:
        if moda[i] == moda[j]:
            cont = moda[i]
            if cont == moda[i]:
                cont == 'nao existe'

                
print('Moda:',  cont)


