function principal() {
    exercicio1(4)
    exercicio5(2)
    exercicio4(3)
    exercicio6(2, 'feminino')
    exercicio8(2)

}

function exercicio1(numero) {
    let soma = 0
    for (let i = 1; i <= numero; i++) {
        soma = soma + i
    }
    // alert(`A soma é ${soma}`)
    return soma
}

function exercicio2(h, m, s) {
    let converte = (h * 3600) + (m * 60) + s
    return converte
}

function exercicio3(numero1, numero2) {
    if (numero2 == 0 || numero2 > numero1) {
        return 'error'
    }
    if (numero1 % numero2 == 0) {
        return 0
    } else {
        for (let i = numero2; i < numero1; i++) {
            if (numero1 % i == 0) {
                return i
            }
        }
    }
}

function exercicio5(numero) {
    // if (numero >= 0) {
    //     alert(`O número ${numero} é positivo!`);
    // } else {
    //     alert(`O número ${numero} é negativo!`);
    // }
    let resposta = numero >= 0 ? 'positivo' : ('negativo'); // operador ternário
    return resposta
}

function exercicio4(raio) {
    let volume
    volume = 4 / 3 * Math.PI * Math.pow(raio, 3)

    alert(`O volume do raio ${raio} é ${volume.toFixed(2)} `);
}

function exercicio6(altura, sexo) {
    let pesoIdeal
    if (sexo == "masculino") {
        pesoIdeal = 72.7 * altura - 58
        alert(`O pesso ideal para o sexo ${sexo} é ${pesoIdeal} `);
    } else if (sexo == "feminino") {
        pesoIdeal = 62.1 * altura - 44.7
        alert(`O pesso ideal para o sexo ${sexo} é ${pesoIdeal} `);
    } else {
        alert(`Por favor, coloque um sexo(masculino ou feminio)`);
    }
}

function exercicio8(numero) {
    let fatorial = 1
    for (let i = 1; i <= numero; i++) {
        fatorial = fatorial * i
    }
    alert(`O fatorial de ${numero} é ${fatorial}`);
}
