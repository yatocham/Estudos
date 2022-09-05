function principal() {
    let farmacias = []; // declara vetor
    for (let i = 0; i < 5; i++) {
        let objeto = {
            codigo: Number(prompt(`Informe código`)),
            endereco: prompt(`Informe nome`),
            nome: prompt(`Informe endereço`)
        }
        // verifica se o código já existe
        let achou = false // ainda não encontrou farmacia com o código 
        for (let j = 0; j < farmacias.length; j++) { // o .length é pq ainda n sei quantos elementos tem no vetor
            if (objeto.codigo == farmacias[j].codigo) {
                achou = true // encontrei
                break; // para de procurar
            }
        }
        if (!achou) { // não achou
            farmacias.push(objeto); // insere no vetor
        }
        else {
            alert(`Já existe farmácia com esse código. Tente novamente.`)
            i-- // não conta a tentativa com falha
        }
    }
    // cria vetor de remedios
    let remedios = [];
    for (let i = 0; i < 5; i++) {
        let objeto = {
            codigoFarmacia: Number(prompt(`Informe código`)),
            nome: prompt(`Nome do remédio`),
            quantidade: Number(prompt(`Quantidade do remédio`)),
            preco: Number(prompt(`Preço do remédio`))
        }
        // procurar se a farmacia existe
        let achou = false
        for (let j = 0; j < farmacias.length; j++) {
            if (objeto.codigoFarmacia == farmacias[j].codigo) {
                achou = true
                break;
            }
        }
        if (achou) {
            remedios.push(objeto)
        }
        else {
            alert(`Farmácia não existe`)
            i--
        }
    }
    // realiza compras 
    for (let i = 0; i < 3; i++) {
        let compra = {
            codigoFarmacia: Number(prompt(`O código da farmacia para a compra`)),
            nome: prompt(`Nome do remédio para a compra`),
            quantidade: Number(prompt(`Quantidade do remédio para compra`)),
        }
        // verifica se o remedio existe
        let achou = false
        for (let j = 0; j < farmacias.length; j++) {
            if ((compra.codigoFarmacia == remedios[j].codigoFarmacia) && (compra.nome == remedios[j].nome)) {
                if (compra.quantidade <= remedios[j].quantidade) {
                    remedios[j].quantidade = remedios[j].quantidade - compra.quantidade
                    alert(`Compra com sucesso`)
                    achou = true
                    break;
                }
                else {
                    alert(`Estoque insuficiente`)
                    i--;
                }
            }
        }
        if (!achou) {
            alert(`Remédio ou farmácia não existe`)
            i--;
        }
    }
}