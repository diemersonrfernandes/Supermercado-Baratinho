class Pessoas {
    nome;
    sobrenome;
    idade;

 constructor (nome, sobrenome, idade){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
 }
 saudacao(){
    console.log(`Meu nome é ${this.nome} ${this.sobrenome} Minha idade é ${this.idade}`);
 }
}

const principal = new Pessoas("Cintya", "Rodrigues", 27);
principal.saudacao();
console.log(principal);



class Aluno extends Pessoas {
    serie;
    turma;
    constructor(nome, sobrenome, idade, serie, turma){
        super (nome, sobrenome, idade);
        this.serie = serie;
        this.turma = turma;
    }
    saudacao(){
        console.log(`Olá aluno ${this.nome} ${this.sobrenome} Sua serie é: ${this.serie} E sua turma é: ${this.turma} `);

    }
}

const alunoNome = new Aluno("Cintya", "Rodrigues", 27,  8, "A",);
console.log(alunoNome)
alunoNome.saudacao();

class Professor extends Pessoas{
    disciplina;
    horas;
    constructor(nome, sobrenome, idade, disciplina, horas){
        super (nome, sobrenome, idade);
        this.disciplina = disciplina;
        this.horas = horas;
    }
    saudacao(){
        console.log(`Sua disciplina é: ${this.disciplina} E sua de curso é: ${this.horas} horas `);

    }

}

const professorNome = new Professor ("Diemerson", "Rodrigues", 30,  "Programacao", 60,);
console.log(professorNome)
professorNome.saudacao();