function principal() {
    let matriz = [];
    matriz[0] = [];
    matriz[1] = [];
    matriz[2] = [];

    // entrada de dados
    let fabricacao = [];
    for (let i = 0; i < i < 3; i++) {
        fabricacao = [i];
        for (let j = 0; j < 3; j++) {
            fabricacao[i][j] = Number(prompt(`Quantidade produzida do carro ${i + 1}`));
        }
    }
}
principal();