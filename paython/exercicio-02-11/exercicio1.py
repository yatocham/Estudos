# Considere um programa que calcule a média aritmética geral de uma classe de alunos
# e imprima a quantidade de notas que estão acima da média calculada. O usuário deve entrar com a quantidade de alunos.


vet = []

ALUNOS = int(input('Entre com uma quantidade de alunos: '))
notas = 0
for i in range(ALUNOS):
    vet.append(int(input('Informe a nota do aluno ' + ALUNOS[i])))
    notas += vet[i]

media = notas / ALUNOS

acimaMedia = 0
for i in range(ALUNOS):
    if vet[i] > media:
        acimaMedia += 1

print(vet)
print(notas)
print('A média foi ' + media)
print(acimaMedia)