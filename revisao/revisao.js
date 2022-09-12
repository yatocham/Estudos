function principal() {
    let opcao;
    let vetor = [];
    let x
    do {
        opcao = Number(prompt(`Escolha 1. Intere elemento no vetor 2. Consulta do vetor 3. Sair`))
        switch (opcao) {
            case 1: cadastra(vetor)
                break;
            case 2: consulta(vetor)
                break;
            case 3: console.log(`Obrigado`)
                break;
            default: console.log(`Opção inválida`)
                break;
        }
    } while (opcao != 0);
}

function cadastra(vetor, x) {
    let objeto = {
        codigo: Number(prompt(`Informe o código do aluno`)),
        nome: Number(prompt(`Informe o nome do aluno`)),
        anoIngreso: Number(prompt(`Informe o ano do aluno`))
    }
    vetor.push(objeto);
}

function consulta(vetor, x) {
    console.log(vetor, x);
}

principal();