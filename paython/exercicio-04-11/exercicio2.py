
# Fazer uma função que calcule a média dos elementos de um vetor.
vetor = []

for i in range(5):
    vetor.append(int(input('Digite um elemento')))
def media(vetor): # funcao 
    soma = 0
    for i in range(5): # for para somar os elementos
        soma += vetor[i] # armazenando elementos na variavel soma
        total = soma / 5 # media
    return total

resultado = media(vetor)

print(resultado)
