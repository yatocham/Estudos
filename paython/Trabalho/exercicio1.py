

valorPrestacao = input('Qual o valor da prestacao?')
contador = 0

while (valorPrestacao != 0):
    contador = contador + 1
    diasAtraso = int(input('Quantos dias está atrasado? '))

    def valorPagamento(valorPrestacao, diasAtraso):
        if diasAtraso == 0:
            print(valorPrestacao)
        else:
            valorMulta = (valorPrestacao + valorPrestacao * 0.03) + \
                valorPrestacao * (diasAtraso * 0.001)
            print(valorMulta)
            return valorMulta

    resposta = valorPagamento(valorPrestacao, diasAtraso)

    # Reiniciar as perguntas
    valorPrestacao = int(input('Qual o valor da prestacao? '))
print('Fim do programa')


relatorio = []
for i in range(contador):
    relatorio.append(
        'Dias em atraso: {} e valor da multa é {}' .format(diasAtraso, resposta))

for i in range(contador):
    print(relatorio[i])
