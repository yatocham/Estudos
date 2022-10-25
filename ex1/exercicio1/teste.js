programa
{
funcao inicio()
    {
inteiro matriz[3][3], lin, col
        escreva("Leitura da Matriz\n")
        para(lin = 0; lin < 3; lin++)
        {
            para(col = 0; col < 3; col++)
            {
                escreva("Digite o valor: ")
                leia(matriz[lin][col])
            }
        }
        escreva("\nEscrita da Matriz\n")
        para(lin = 0; lin < 3; lin++)
        {
            para(col = 0; col < 3; col++)
            {
                escreva(matriz[lin][col], " ")
            }
            escreva("\n")
        }
    }
}
