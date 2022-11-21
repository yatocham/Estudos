// percorrendo o vetor com forEach
// dentro do forEach temos uma função anônima, sem nome
// vetor.forEach(
    //     elemento => console.log(elemento)
    // );
    // vetor.forEach(f1)
    
    // f1 = ((elemento) => {
        //     console.log(elemento)
        // });
        //vai percorrer o vetor elemento por elemento
        // vetor.forEach(((elemento) => {
            //     console.log(elemento)
            // }));
            
            // forEach percorre um vetor que já existe
            // ele pega o elemento e pode pegar a posição
            // vetor.forEach( ((elemento, posicao) => {
                //     if (posicao % 2 == 0) {
                    //         console.log(elemento)
                    //     }
                    // }) );
                    
// vetor.forEach( ((bola, posicao) => {
    //     console.log(`${elemento} na posição ${posicao}`)
    // }) )
    
    
    ///////////
    //ARRAY MAP
    // mapeia um vetor em um outro vetor com a mesma quantidade de elementos do vetor que vai ser mapeado
    let vetor = [10, 5, 2, 8, 12, 6];

let vetor2 = vetor.map(elemento => elemento * 3)
console.log(vetor2)

// Array filter
// ele cria outro vetor filtrato 

// let vetor3 = vetor.filter ((elemento) => elemento % 2 == 0)
// console.log(vetor3)
