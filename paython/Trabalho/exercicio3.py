
def desenhar_forca(pe):
    print('\n----\n   |')
    if pe > 0:
        print('   O')
    if pe > 3:
        print('  /|\\')
    elif pe > 2:
        print('  /|')
    elif pe > 1:
        print('   |')
    if pe > 5:
        print('  / \\')
    elif pe > 4:
        print('  /')

filmes = ['matrix', 'os vingadores', 'homem aranha']
p1 = filmes(0, len(filmes) - 1).lower()
p2 = ''
for c in p1:
    p2 += '-' if c != ' ' else ' '
erros = 0
ledig = ''
while p1 != p2 and erros < 6:
    print(f'{p2}\n\nLetras digitadas: {ledig}')
    desenhar_forca(erros)  # desenha forca
    letra = input('\nDigite uma letra: ').lower()
    ledig += letra
    p2 = list(p2)  # converte para lista para poder alterar as posições
    achou = False
    for i in range(len(p1)):
        if p1[i] == letra:
            p2[i] = letra
            achou = True
    p2 = ''.join(p2)
    if not achou:
        erros += 1

print(p2)
desenhar_forca(erros)  # desenha forca
if erros < 6:
    print(f'\n\nGanhou!!!')
else:
    print(f'\n\nPerdeu!!!')