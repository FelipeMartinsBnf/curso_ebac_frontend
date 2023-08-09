class Aluno {
    constructor(nome, nota){
        this.nome = nome;
        this.nota = nota
    }
}

const alunos = [
    new Aluno('Felipe', 6),
    new Aluno('João', 2),
    new Aluno('Larissa', 10),
    new Aluno('Julia', 8),
    new Aluno('Marcelo', 3)
]

const alunosAprovados = alunos.filter(aluno => {
    if(aluno.nota >= 6){
        return aluno;
    }
})

console.log(alunosAprovados)