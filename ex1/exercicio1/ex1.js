// Faça um programa em JavaScript que solicite ao usuário dados de 10 bikes. Cada bike deve conter informações 
// como marca, modelo, quadro, aro, ano e preço. 
// Após a entrada de dados, o programa deve calcular e exibir ao usuário:
// 1) a média de preço das bikes okk
// 2) qual a bike é mais antiga, deve-se considerar empates
// 3) quais as bikes são do marca Caloi
// 4) quantas bikes possuem aro 29
// 5) qual bike possui maior quadro, pode-se desconsiderar empates

function bikes() {
    //entrada de dados
    let vetor = [];
    for (let i = 0; i < 2; i++) {

        let bike = {
            marca: prompt(`Qual a marca?`),
            quadro: Number(prompt(`Qual o número do quadro?`)),
            aro: Number(prompt(`Qual o número do aro?`)),
            ano: Number(prompt(`Qual o ano?`)),
            preco: Number(prompt(`Qual o preço?`))
        }
        vetor.push(bike);
    }
    // meida de preco das bikes
    let soma = 0
    for (let i = 0; i < 2; i++) {
        soma = soma + vetor[i].preco // aqui percorre o obj e pega acumula o preço

    }
    media = soma / 2
    // alert(media);

    let antiga = vetor[0].ano
        for (let i = 0; i < 2; i++) {
            if (antiga > vetor[i].ano) {
                antiga = vetor[i].ano
            }
        }
    alert(`A bike mais antiga é do ano de  ${antiga}`);

    marcaBike = vetor[0].marca
    somaMarca = 0
    for (let i = 0; i < 2; i++) {
        if (marcaBike == "Caloi") {
            somaMarca = somaMarca + marcaBike
        }
    }
    alert(`A quantidade de marcas Caloi são ${somaMarca}`);

    aroBike = vetor[0].aro
    somaAro = 0
    for (let i = 0; i < 2; i++) {
        if (aroBike == 29) {
            somaAro = somaAro + aroBike
        }
    }
    alert(somaAro);

}