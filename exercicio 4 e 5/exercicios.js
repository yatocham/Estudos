//exercício 4
const principal = () => {
    let nome = []
    let notas = []
    let media = 0
    let total = 0
    let mediaSala = 0
    let totalSala = 0
    for (let i = 0; i < 3; i++) {
        nome.push(prompt('Informe o aluno'))
        media = 0
        total = 0
        notas[i] = []
        for (let j = 0; j < 3; j++) {
            notas[i][j] = Number(prompt(`Informe a nota`))
            total += notas[i][j]
            media = total / 3
        }
        totalSala += media
        if (media >= 7) {
            alert(`Aprovado!`)
        } else if (media >= 5) {
            alert(`Exame`)
        } else {
            alert(`Reprovado :(`)
        }
    }
    mediaSala = totalSala / 3
    alert(`A média da sala é ${mediaSala}`)
}

//exercício 5

let mes = []
let semana = []
let totalMes = 0
let totalAno = 0
for (let i = 0; i < 12; i++) {
    totalMes = 0
    semana[i] = []
    for (let j = 0; j < 4; j++) {
        semana[i][j] = Number(prompt(`Informe as vendas da semana ${j + 1}`))
        totalMes += semana[i][j]
    }
    alert(`No mês ${i + 1} o total das vendas foi ${totalMes}`)
    totalAno += totalMes
}
alert(`O total do ano foi ${totalAno}`)