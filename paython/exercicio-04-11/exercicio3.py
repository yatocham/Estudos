# Fazer uma função que retorne o maior elemento de um vetor.

vetor = []

for i in range(5):
    vetor.append(int(input('Digite um elemento')))

def maiorElemento(vetor):

    maior = vetor[0] 
    for i in range(5):
        if (vetor[i] > maior):
            maior = vetor[i]
    return maior

resultado = maiorElemento(vetor)

print(resultado)
            
