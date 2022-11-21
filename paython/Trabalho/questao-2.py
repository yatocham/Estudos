# Trabalho em Python Professora Jaqueline
# Alunos: Beatriz Custódio Soares 24318 Eder Junior Alves Silva 24323

# A MODA de um vetor de números é o número m no vetor que é repetido com maior frequência.
# Se mais de um número for repetido com frequência máxima igual, não existirá uma moda.
# Escreva uma função que aceite um vetor de números e retorne a moda ou uma indicação de que
# a moda não existe.
  
vetor = [11,2,2,3,4,5,5,5]
contadores = []
  
i = 0
while i < len(vetor) :
    contadores.append(vetor.count(vetor[i]))
    i += 1
  
novoVetor = dict(zip(vetor, contadores))

moda = []

for (chave,valor) in novoVetor.items():
    if valor == max(contadores):
        moda.append(chave)

if len(moda) > 1:
    print("A moda não existe")
else:
    print("A mode é: " + str(moda[0]))