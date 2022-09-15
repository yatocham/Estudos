// Utilizando-se de funções, passagem de parâmetros, e uma função principal com menu de opções, 
// faça um programa em
//  JavaScript para gerenciar um sistema acadêmico, contendo as seguintes tarefas:
// 1. Cadastrar 1 curso, contendo o id, o nome, e a área do curso. Não se pode cadastrar dois cursos 
// com o mesmo id.
// 2. Cadastrar 1 aluno, contendo o id, o nome, a cidade, o cpf e o id do curso. 
// Não se pode cadastrar dois alunos 
// com o mesmo id. Também não é possível cadastrar um aluno de um curso que não exista
// 3. Mostrar todos os alunos de um determinado curso, informando o id do curso
// 4. Mostrar todos os cursos que são da área de Exatas
// 5. Mostrar todos os alunos que são da cidade de Franca
// 6. Sair

function principal() {
    let opcao;
    let cursos = [];
    let alunos = [];
    do {
        opcao = Number(prompt(`Escolha\n 1. Cadastrar 1 curso\n 2. Cadastrar 1 aluno\n 3. Mostrar todos os alunos de um determinado curso\n 4. Mostrar todos os cursos que são da área de Exatas\n 5. Mostrar todos os alunos que são da cidade de Franca\n 6. Sair `));
        switch (opcao) {
            case 1: cadastraCurso(cursos)
                break;
            case 2: cadastraAluno(alunos, cursos)
                break;
            case 3: todosAlunos(alunos)
                break;
            case 4: cursoExatas(cursos)
                break;
            case 5: alunosFranca(alunos)
                break;
            case 6: console.log(`Obrigado`)
                break;
            default: console.log(`Opção inválida`)
                break;
        }
    } while (opcao != 6);
}

function cadastraCurso(cursos) {
    let objeto = {
        id: Number(prompt(`Digite o Id do Curso`)),
        nome: prompt(`Nome do curso:`),
        curso: prompt(`Qual a área do curso:`).toLocaleUpperCase()
    }
    let achou = false
    for (let i = 0; i < cursos.length; i++) {
        if (cursos[i].id == objeto.id) {
            achou = true // não pode inserir
            break;// não continua procurando
        }
    }
    if (!achou) {
        cursos.push(objeto)
        alert('Curso cadastrado com sucesso!');
    }
    else {
        alert('Esse id de curso já foi cadastrado!');
        i--;
    }
}

// Cadastrar 1 aluno, contendo o id, o nome, a cidade, o cpf e o id do curso. 
// Não se pode cadastrar dois alunos 
function cadastraAluno(Vetoralunos, Vetorcursos) {
    let foundCurso = false
    let foundAluno = false
    let objeto = {
        id: Number(prompt(`Digite o ID do aluno`)),
        nome: prompt(`Nome do Aluno:`),
        cidade: prompt(`Qual a cidade:`).toLocaleUpperCase(),
        cpf: Number(prompt(`Qual o CPF:`)),
        idCurso: Number(prompt(`Digite o ID do curso`))
        // idCurso: cursos[0].id
    }
    for (let i = 0; i < Vetorcursos.length; i++) {
        if (objeto.idCurso == Vetorcursos[i].id) {
            foundCurso = true // não pode inserir
            break;// não continua procurando
        }
    }
    for (let i = 0; i < Vetoralunos.length; i++) {
        if (objeto.id == Vetoralunos[i].id) {
            alert("Id do aluno ja existe")
            foundAluno = true
            break
        }
    }
    if (foundCurso && !foundAluno) {
        Vetoralunos.push(objeto)
        alert('Aluno cadastrado com sucesso!');
    }
    else {
        alert('Id do curso não encontrado.');
    }
}

// 3. Mostrar todos os alunos de um determinado curso, informando o id do curso
// function todosAlunos(Vetoralunos) {
//     let id = Number(prompt("Digite o id do curso"))
//         for(let i = 0; i < Vetoralunos.length; i++)
//         {
//             if(Vetoralunos[i].idCurso == id)
//             {
//                 alert(Vetoralunos[i].nome)
//             }
//         }
// }
function todosAlunos(vetalunos)
{
    let id = Number(prompt("Digite o id do curso"))
    for(let i = 0; i < vetalunos.length; i++)
    {
        if(vetalunos[i].idCurso == id)
        {
            alert(vetalunos[i].nome)
        }
    }
}

// 4. Mostrar todos os cursos que são da área de Exatas
function cursoExatas(Vetorcursos) {
    var cursos = [];
    for (let i = 0; i < Vetorcursos.length; i++) {
        if (Vetorcursos[i].curso == "EXATAS") {
            cursos.push( "\n" + Vetorcursos[i].nome);
        }
    }
    alert(cursos);
}

function alunosFranca(vetalunos)
{
    for(let i = 0; i < vetalunos.length; i++)
    {
        if(vetalunos[i].cidade == "FRANCA")
        {
            alert(vetalunos[i].nome)
        }
    } 
   }

principal();