// Faça um programa em JS que guarde em um vetor dados de 5  farmacias: código, Nome e endereço 
// Em seguida, guarde em um vetor dados de 10 remédios: código da farmácia, nome do remédio, qtde em estoque e preço
//  Não é possível crias duas farmácias com o mesmo código
//  Não é possível cadastrar um remédio de uma farmácia que não exista
// Ao final, efetive a compra de 5 remédios, e atualize o estoque

function ex2() {
    let farmacia = [];
    //entrada de dados
    for (let i = 0; i < 2; i++) {
        let farmacias = {
            codigo: prompt(`Qual o código?`),
            nome: prompt(`Qual o nome?`),
            endereco: prompt(`Qual o endereço?`),
        }
        let achou = false
        for (let j = 0; j < farmacia.length; j++) {
            if (farmacias.codigo == farmacia[i].codigo) achou = true;

        }
        if (!achou) {
            farmacia.push(farmacias);
        } else {
            i--
        }
    }

    let remedio = [];
    for (let i = 0; i < 2; i++) {
        let remedios = {
            farmacia: prompt(`Qual o código da farmácia?`),
            nome: prompt(`Qual o nome?`),
            quantidade: prompt(`Qual a quantidade?`),
            preco: prompt(`Qual o preço`),
        }
        let achou = false
        for (let j = 0; j < farmacia.length; j++) {
            if (remedios.farmacia == farmacia[i].codigo) achou = true;
        }
        if (!achou) {
            i--
        } else {
            remedio.push(remedios);
        }
        remedio.push(remedios);
    }
    let tudo = 5
    for (let k = 0; k < tudo; k++) {
        quantidade_compra = Number(prompt(`Quantos remédios você deseja comprar?`));

        estoque = quantidade_compra - tudo
    }
    alert(`Estoque atualizado, a quantidade em estoque é: ${estoque}`)
}