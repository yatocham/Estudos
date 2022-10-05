function principal(){

    let matriz = [] // matriz é um vetor
    matriz[0] = []
    matriz[1] = []
    matriz[2] = []

    matriz[0][0] = 100
    matriz[0][1] = 200
    matriz[0][2] = 300

    matriz[1][0] = 400
    matriz[1][1] = 500
    matriz[1][2] = 600

    matriz[2][0] = 700
    matriz[2][1] = 800
    matriz[2][2] = 900

    // entrada de dados
    let fabricacao = []
    for(let i=0;i<3;i++){
        fabricacao[i] = []
        for(let j=0;j<3;j++){
            fabricacao[i][j] = Number(prompt(`Qtde produzida do carro ${i+1}`))
        }
    }
}