# Crie um programa que leia uma série de 50 notas e calcule quantas são 10% acima da média
#  e quantas são 10% abaixo da média.

vet = []

notas = 0
for i in range(50):
    vet.append(int(input('Informe a nota do aluno')))
    notas += vet[i]

media = notas / 50

acimaMedia = 0
for i in range(50):
    if vet[i] > media:
        acimaMedia += 1
    else:
        porcentagemBaixa = vet[i]

porcentagem = 50 - acimaMedia 

print(porcentagem)
print(porcentagemBaixa)
print(vet)
print(notas)
print('A média foi ' + media)
print(acimaMedia)