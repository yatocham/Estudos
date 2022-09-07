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
    alert(`A soma é ${soma}`);
}

function exercicio5(numero) {
    if (numero >= 0) {
        alert(`O número ${numero} é positivo!`);
    } else {
        alert(`O número ${numero} é negativo!`);
    }
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
