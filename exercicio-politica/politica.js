/* Faça um programa em JS que guarde em um vetor dados de 5  partidos políticos: código, nome, sigla, presidente, nro de políticos
Em seguida, guarde em um vetor dados de 5 políticos: código do partido, nome do político, qtde de votos na
eleição atual (inicie com 0) e cargo que ocupa
Não é possível crias dois partidos com o mesmo código
Não é possível cadastrar um político de um partido que não exista
Ao final, inicie uma votação, faça o cadastro de 10 votos, e atualize a qtde de votos do político.
Não é possível votar em candidato que não exista, votar em um candidato de um partido errado.
Finalmente, mostrar os dados do político que teve mais votos. */

function TodosOsPartidos() {
    let partidosPoliticos = [];
    for (i = 0; i < 5; i++) {
        let objetoPartidos = {
            codigo: prompt(`Qual o código?`),
            nome: prompt(`Qual o nome?`),
            sigla: prompt(`Qual a sigla?`),
            presidente: prompt(`Qual o presidente?`),
            numeroPoliticos: Number(prompt(`Qual o número de politicos?`))
        }
        let achou = false;
        for (let j = 0; j < partidosPoliticos.length; j++) {
            if (objetoPartidos.codigo == partidosPoliticos[j].codigo) {
                achou = true; // encontrei
                break;
            }
        }
        if (!achou) { // se não achou
            partidosPoliticos.push(objetoPartidos);
        }
        else {
            alert(`Esse partido já existe!`);
            i--;
        }
    }
    let politicos = [];
    for (i = 0; i < 5; i++) {
        let objetoPoliticos = {
            codigo: prompt(`Qual é o código do partido?`),
            nome: prompt(`Qual é o nome do politico?`).toUpperCase(), //aqui colocamos as letras em caixa alta
            votos: 0,
            cargo: prompt(`Qual é o cargo que ocupa?`)
        }
        let achou = false
        for (j = 0; j < politicos.length; j++) {
            if (objetoPoliticos[j].codigo == objetoPartidos.codigo) {
                achou = true // encontrei
                break;
            }
        }
        if (!achou) {
            politicos.push(objetoPoliticos)
            alert(`Politico inserido com sucesso!`);
        }
        else {
            alert(`Esse partido não existe, politico não inserido`);
            i--;
        }
    }
    // votação
    let votacao = [];
    for (i = 0; i < 10; i++) {
        votos = {
            codigo: Number(prompt(`Qual o código do partido que você deseja votar?`)),
            nome: prompt(`Qual é o nome do candidato?`),
            voto: 1
        }
        if (votos.nome == objetoPoliticos.nome && votos.codigo == objetoPoliticos.codigo) {
            achou = true;
        }
    }
    if (!achou) {
        alert(`Não foi possivel votar`);
    } else {
        votacao.push(votos);
        alert(`Voto realizado com sucesso!`);
    }
}