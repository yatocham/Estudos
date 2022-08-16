// Faça um programa em JavaScript que solicite ao usuário dados de 10 bikes. Cada bike deve conter informações 
// como marca, modelo, quadro, aro, ano e preço. 
// Após a entrada de dados, o programa deve calcular e exibir ao usuário:
// 1) a média de preço das bikes okk
// 2) qual a bike é mais antiga, deve-se considerar empates
// 3) quais as bikes são do marca Caloi
// 4) quantas bikes possuem aro 29
// 5) qual bike possui maior quadro, pode-se desconsiderar empates

function bikes() {
    const tam = 3; 
    //entrada de dados
    let vetor = [];
    for (let i = 0; i < tam; i++) {

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
    for (let i = 0; i < tam; i++) {
        soma = soma + vetor[i].preco // aqui percorre o obj e pega acumula o preço

    }
    media = soma / 2
    alert(`A média é ${media}`);

    let antiga = vetor[0].ano // aqui ele pega o ano
    let antigas = [];
    for (let i = 0; i < tam; i++) { 
        if (antiga > vetor[i].ano) { // se o ano q ele pegou for menor q antiga 
            antiga = vetor[i].ano   // ele vai subistituir 
            antigas = [];
            antigas.push(vetor[i]); // e vai armazenar em um outro vetor
        }
        else if (antiga == vetor[i].ano) { // se não ele mantém 
            antigas.push(vetor[i]);
        }
        
    }
    // alert(`A bike mais antiga é do ano de  ${antiga}`);
    // alert(JSON.stringify(antigas));
    // console.log(antigas); 

    let antigasHtml = antigas.map(el => { // map percorre o vetor e cria um novo vetor , o .map ele copia e modifica  
        return JSON.stringify(el);  // transforma objeto em string 
    });
    alert(`A| Bike mais antiga é: ` + antigasHtml.join('\n')); // join concatena os elementos do vetor

    let somaMarca = [];
    for (let i = 0; i < tam; i++) {
        marcaBike = vetor[i].marca
        if (marcaBike == "Caloi") {
        somaMarca.push(vetor[i]);    
        }
    }

    let marcasHtml = somaMarca.map(elementos => {
        return JSON.stringify(elementos);
    });
    alert(`As Bikes da marca Caloi são: ` + marcasHtml.join('\n'));
    

    let somaAro = [];
    for (let i = 0; i < tam; i++) {
        aroBike = vetor[i].aro
        if (aroBike == 29) {
            somaAro.push(vetor[i]);
        }
    }
    let aroHtml = somaAro.map(aros => {
        return JSON.stringify(aros);
    });
    alert(`As Bikes com aro 29 são ` + aroHtml.join('\n'));

    maiorQuadro = [];
    for (let i = 0; i < tam; i++) {
        quadros = vetor[i].quadro
        if (maiorQuadro < quadros) {
            maiorQuadro.push(vetor[i]);
        }
    }
    let quadroHtml = maiorQuadro.map(quadroBike => {
        return JSON.stringify(quadroBike);
    })
    alert(`O maior quadro é: ` + quadroHtml.join('\n'));

}