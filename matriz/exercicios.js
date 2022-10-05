// Faça um programa que preencha uma matriz 3 X 5 com números inteiros, calcule e mostre a quantidade
// de elementos entre 15 e 20.

function principal() {
    // entrada de dados
    let fabricacao = []
    let cont = 0
    for (let i = 0; i < 3; i++) {
        fabricacao[i] = []
        for (let j = 0; j < 5; j++) {
            fabricacao[i][j] = Number(prompt(`Digite um número Inteiro ${i + 1}`))

            if (fabricacao[i][j] >= 15 && fabricacao[i][j] <= 20) {
                cont++
            }
        }
    }
    alert(`A quantidade de elementos entre 15 e 20 é ${cont}`);
}

// Crie um progrma que preencha uma matriz 2 x 4 com números inteiro, calcule e mostre: 
// a quant de elementos entre 12 e 20 em cada linha;
// a média dos elementos pares da matriz

function exercicio2() {
    // entrada de dados
    let fabricacao = [];
    let cont = 0
    let par = 0
    let media;
    let qtde = 0
    for (let i = 0; i < 2; i++) { // i linha
        fabricacao[i] = []
        cont = 0
        for (let j = 0; j < 4; j++) { // j coluna
            fabricacao[i] = Number(prompt(`Digite um número para a linha ${i}`))
            if (fabricacao[i] >= 12 && fabricacao[i] <= 20) {
                cont++
            }
            if (fabricacao[i][j] % 2 == 0) {
                qtde++
                par+= fabricacao[i][j]
                media = par / qtde
            }
        }
        alert(`A quantidade de elementos entre 12 e 20  na linha ${i} é ${cont}`);
    }
    alert(`A média dos elementos pares é ${media}`);
}