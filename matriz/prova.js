function prova(){
    let opcao
    let albuns = []
    let figurinhas = []
    do{
        opcao = Number(prompt(`Informe uma opção`))
        switch(opcao){
            case 1: cadastraAlbum(albuns)
                    break
            case 2: cadastraFigurinha(figurinhas, albuns)
                    break
            case 3: compra(figurinhas)
                    break
            case 4: troca(figurinhas)
                    break
            case 5: paraTroca(figurinhas)
                    break
            case 6: naoTem(figurinhas)
                    break
            case 7: faltam(albuns, figurinhas)
                    break
        }
    }
    while (opcao != 8)
}
function cadastraAlbum(albuns){
    let objAlbum = {
        id: Number(prompt(`Informe id`)),
        nome: prompt(`Informe nome`),
        empresa: prompt(`Infome empresa`),
        qtde: Number(prompt(`Informe qtde`))
    }
    let achou = false
    for(let i=0;i<albuns.length;i++){
        if (albuns[i].id == objAlbum.id){
            achou = true
            break
        }
        
    }
    if (!achou){
        albuns.push(objAlbum)
    }
    else {
        alert('Album já cadastrado')
    }
}
function cadastraFigurinha(figurinhas, albuns){
    let objFigurinha = {
        id: Number(prompt(`Informe id`)),
        nome: prompt(`Informe nome`),
        time: prompt(`Infome time`),
        qtde: 0,
        idAlbum: Number(prompt(`Informe id do álbum`))
    }
    let achou = false
    for(let i=0;i<albuns.length;i++){
        if (albuns[i].id == objFigurinha.idAlbum){
            achou = true
            break
        }
    }
    if (achou){
        let achou2 = false
        for(let i=0;i<figurinhas.length;i++){
            if (figurinhas[i].id == objFigurinha.id){
                achou2 = true
            }
        }
        if (!achou2){
            figurinhas.push(objFigurinha)
        }
        else {
            alert('Figurinha já existe')
        }
    }
    else {
        alert('Album não existe')
    }
}
function compra(figurinhas){
    let id = Number(prompt('Informe id'))
    let achou = false
    for(let i=0;i<figurinhas.length;i++){
        if (id == figurinhas[i].id){
            figurinhas[i].qtde++
            achou = true
        }
    }
    if (!achou){
        alert(`Figurinha não cadastrada`)
    }
}
function troca(figurinhas){
    let idRepetida = Number(prompt('Informe id da repetida'))
    let idNova = Number(prompt('Informe id da nova'))
    let achou = false
    let i
    for(i=0;i<figurinhas.length;i++){
        if (idRepetida == figurinhas[i].id){
            achou = true
            break
        }
    }
    let achou2 = false
    let j
    for(j=0;j<figurinhas.length;j++){
        if (idNova == figurinhas[j].id){
            achou2 = true
            break
        }
    }
    if (achou && achou2){
        figurinhas[i].qtde--
        figurinhas[j].qtde++
    }
}

function paraTroca(figurinhas){
    for(let i=0;i<figurinhas.length;i++){
        if (figurinhas[i].qtde > 1){
            console.log(figurinhas)
        }
    }
}

function naoTem(figurinhas){
    for(let i=0;i<figurinhas.length;i++){
        if (figurinhas[i].qtde == 0){
            console.log(figurinhas)
        }
    }
}

function faltam(albuns, figurinhas){
    let album = prompt(`Informe id do álbum`)
    let capacidade = 0
    for(let i=0;i<albuns.length;i++){
        if (albuns[i].id == album){
            capacidade = albuns[i].qtde
        }
    }
    for(let i=0;i<figurinhas.length;i++){
        if (figurinhas[i].idAlbum == album){
            if (figurinhas[i].qtde > 0){
                capacidade--
            }
        }
    }

}