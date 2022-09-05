/*Faça um programa em JS que guarde em um vetor dados de 5  partidos políticos: código, nome, sigla, presidente, 
nro de políticos
Em seguida, guarde em um vetor dados de 5 políticos: código do partido, nome do político, qtde de votos na eleição atual
(inicie com 0) e cargo que ocupa
Não é possível crias dois partidos com o mesmo código
Não é possível cadastrar um político de um partido que não exista
Ao final, inicie uma votação, faça o cadastro de 10 votos, e atualize a qtde de votos do político.
Não é possível votar em candidato que não exista, votar em um candidato de um partido errado.
Finalmente, mostrar os dados do político que teve mais votos. */

function eleicoes() {
    
    let partidosPoliticos = [];
    for (i = 0; i < 2; i++) {
        objeto = {
            codigo: Number(prompt(`Qual o código?`)),
            nome: prompt(`Qual o nome do Partido?`),
            sigla: prompt(`Qual a sigla?`),
            presidente: prompt(`Qual o Presidente?`),
            quantidade: prompt(`Qual a quantidade de políticos?`)
        }
        let achou = false;
        for (j = 0; j < partidosPoliticos.length; j++) {
            if (objeto.codigo == partidosPoliticos[j].codigo) {
                achou = true; //encontrei
                break;
            }
        }
        if (!achou) {
            partidosPoliticos.push(objeto);
        }
        else {
            alert(`Esse partido já existe!`);
            i--;
        }
    }

    let politicos = [];
    for (i = 0; i < 5; i++) {
        objeto = {
            codigo: Number(prompt(`Qual o código do partido?`)),
            nome: prompt(`Qual o nome do politico?`),
            votos: 0,
            codigo: prompt(`Qual é o cargo que ocupa?`)
        }
        // Não é possível cadastrar um político de um partido que não exista
        let achou = true;
        for (j = 0; j < politicos.length; j++) {
            if (politicos.codigo == objeto.codigo) {
                achou = true // encontrou
                break;
            }
        }
        if (!achou) {
            politicos.push(objeto);
        }
        else {
            alert(`Esse partido não existe!!`);
        }
    }
    // votação 
    let votacao = [];
    for (i = 0; i < 10; i++) {
        votos = {
            politico: prompt(`Qual o politico?`),
            partido: prompt(`Qual o código do partido?`),
            voto: 1
        }
        // Não é possível votar em candidato que não exista, votar em um candidato de um partido errado.
        let achou = false;
        for (j = 0; j < votacao.length; j++) {
            if (votos.politico == politicos.nome && votos.partido == partidosPoliticos.codigo) {
                votacao[j].voto = votacao.voto + voto[j].voto
                alert(`Voto realizado com sucesso!`)
                achou = true // encontrou
            }

            if (!achou) {
                votacao.push(votos);
            }
            else {
                alert(`O candidato não existe, ou o partido está errado!`)
            }

        }

    }
    // Finalmente, mostrar os dados do político que teve mais votos.

    let vencedor = Number(votacao[0].voto)
    let maior = Number(politicos[0].votos)
    for (let i = 0; i < 2; i++) {
        if (politicos[i] > maior) {
            maior = politicos.votos;
            vencedor = politicos.nome;
        }
    }
    alert(`O vencedor é ${vencedor} com ${maior} votos!`)


}


