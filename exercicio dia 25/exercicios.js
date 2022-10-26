function principal() {
    let candidatos = [];
    cadastra(candidatos);
    consulta(candidatos);
    usandoMap(candidatos);
    usandoFilter(candidatos);
}

//1- Faça um cadastro de 5 candidatos de uma eleição, contendo: nome do candidato; partido; cpf; quantidade de votos.
cadastra = (candidatos) => {
    for (let i = 0; i < 5; i++) {
        let objCandidato = {
            nome: prompt(`Informe nome do candidato`),
            partido: prompt(`Informe o partido do candidato`),
            cpf: prompt(`Informe o cpf do candidato`),
            votos: Number(prompt(`Informe qtde de votos do candidato`))
        }
        candidatos.push(objCandidato);
    }
}

//2-Utilizando a função forEach, percorra o vetor listando todos os candidatos com mais de 100 votos e sejam do partido PX.
consulta = (candidatos) => {
    candidatos.forEach((candidato) => {
        if (candidato.partido == 'PX' && candidato.votos > 100) {
            console.log(candidato);
        }
    });
}

//3- Utilizando a função map, crie um novo vetor contendo todos os candidatos do vetor original, mas no vetor novo os candidatos devem ter 8 votos
//a mais. Mostrar o novo vetor.
usandoMap = (candidatos) => {
    let novo = candidatos.map((obj) => {
        obj.votos += 8
        return obj;

    });
    console.log(novo);
}

//4- Utilizando a função filter, crie um novo vetor contendo apenas os candidatos que possuem quantidade de votos entre 30 e 80. Mostrar o novo
//vetor.
usandoFilter = (candidatos) => {
    // produz um novo vetor com um tamanho menos do que o original
    let novo = candidatos.filter((obj) => {
        return obj.votos > 30 && obj.votos < 80
    });
    console.log(novo);
}

principal();
