function votos(){
    let vetor = [];
    // leitura dos dados
    for(let i=0; i<10; i++){
        let candidato = { // aqui é o objeto
            partido: prompt('Informe o partido do canditado: '),
            nome: prompt('Qual o nome do candidato: '),
            votos: Number(prompt('Quantos votos o canditado tem: '))
            
        }
        while (candidato.votos < 0){
            candidato.votos = Number(prompt)
        }

    }
    vetor.push(candidato);
    // processamento dos dados
    // o mais votado é o primeiro candidato
    // em caso de empate
    let maisVotado = vetor[0]; // mais voltado é um vetor 
    maisVotado0[0] = candidato[0]
    for(let i=1; <vetor.length; i++){
        if(vetor[i].votos > maisVotado[0].votos){
            masiVotado[0] = vetor[i]
        }
        else if (vetor[i].votos == maisVotado.votos){
            maisVotado.push(vetor[i])
        }
    }

    //  esse role foi o danilo q fez 
    // let maior = vetor[0].votos
    // let vencedor = vetor[0].nome
    // for(let i=0; i<2; i++){
    // if(vetor[i].votos > maior){
    //     maior = vetor[i].votos
    //     vencedor = vetor[i].nome
    //     }
    // }
    alert(`o candidato vencedor é ${vencedor}, com ${maior} votos`);
}