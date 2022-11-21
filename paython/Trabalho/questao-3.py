# Trabalho em Python Professora Jaqueline
# Alunos: Beatriz Custódio Soares 24318 Eder Junior Alves Silva 24323

from random import randint

def desenhar_forca(pe):

    match pe:
        case 0:
            print('|-----')
            print('|    |')
            print('|')
            print('|')
            print('|')

        case 1:
            print('|-----')
            print('|    |')
            print('|    O')
            print('|')
            print('|')
        case 2:
            print('|-----')
            print('|    |')
            print('|    O')
            print('|    |')
            print('|')
        case 3:
            print('|-----')
            print('|    |')
            print('|    O')
            print('|   /|')
            print('|')
        case 3:
            print('|-----')
            print('|    |')
            print('|    O')
            print('|   /|\\')
            print('|')
        case 4:
            print('|-----')
            print('|    |')
            print('|    O')
            print('|   /|\\')
            print('|   /')
            print('_')
        case 5:
            print('|-----')
            print('|    |')
            print('|    O')
            print('|   /|\\')
            print('|   / \\')
        case 6:
            print('')

filmes = ['Os Vingadores', 'Avatar', 'Batman']
descobrirFilmes = filmes[randint(0, len(filmes) - 1)].lower()
confirmandoFilmes = ''
for c in descobrirFilmes:
    confirmandoFilmes += '-' if c != ' ' else ' '
erros = 0
acmLetras = ''
while descobrirFilmes != confirmandoFilmes and erros < 6:
    print(f'{confirmandoFilmes}\n\nLetras digitadas: -{acmLetras}-')
    desenhar_forca(erros)  # desenha forca
    letra = input('\nDigite uma letra: ').lower()
    acmLetras += letra
    confirmandoFilmes = list(confirmandoFilmes)  # converte para lista para poder alterar as posições
    achou = False
    for i in range(len(descobrirFilmes)):
        if descobrirFilmes[i] == letra:
            confirmandoFilmes[i] = letra
            achou = True
    confirmandoFilmes = ''.join(confirmandoFilmes)
    if not achou:
        erros += 1

print(confirmandoFilmes)
desenhar_forca(erros)  # desenha forca
if erros < 6:
    print(f'\n\nGanhou :)')
else:
    print(f'\n\nPerdeu :(')