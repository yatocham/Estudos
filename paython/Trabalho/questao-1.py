# Trabalho em Python Professora Jaqueline
# Alunos: Beatriz Custódio Soares 24318 Eder Junior Alves Silva 24323

valorPrestacao = int(input('Qual o valor da prestacao ? '))
contador = 0

while (valorPrestacao != 0):
    contador = contador + 1
    diasAtraso = int(input('Quantos dias está atrasado? '))

    def valorPagamento(valorPrestacao, diasAtraso):
        total1 = 0 
        if diasAtraso != 0:
            valorMulta = (valorPrestacao + valorPrestacao * 0.03) / valorPrestacao * (diasAtraso * 0.001)
        else:
            print('Sem atrasos!')
        return valorPrestacao
    
    resposta = valorPagamento(valorPrestacao, diasAtraso) 
    valorPrestacao = int(input('Qual o valor da prestacao? '))

    # Reiniciar as perguntas
print('------------------')
print('Relatório do dia')
print('Foram pagas', contador, 'prestações')
print('Fim do programa')