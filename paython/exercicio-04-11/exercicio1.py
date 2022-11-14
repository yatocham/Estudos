 # Fazer uma função que calcule a soma dos elementos de um vetor

vetor = []
for i in range(5):
    vetor.append(int(input('Digite um numero')))
def soma(vetor):
    for i in range(5):
        somatoria += vetor[i]
    return somatoria

resultado = soma(vetor)
print('A somatoria é {}'.format(resultado))

