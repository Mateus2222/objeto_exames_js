class Exames{
    constructor(weight, answer){
        this.weight = weight
        this.exam = {}
        this.answer = answer
        this.notasalunos = {}
    }
    //Adiciona o nome do aluno vinculado as suas repostas
    add(aluno=String,exame=Array){
        this.exam[aluno] = exame
    }
    //Calcula a nota dos alunos com base em suas respostas
    notas(){
        Object.keys(this.exam).forEach(element => {
            this.notasalunos[element] = 
            Object.keys(this.exam[element]).filter((questoes) => this.exam[element][questoes] == this.answer[questoes]).reduce((notas,i) => notas += this.weight[i],0)
        });
    }
    //Calcula a média das notas do alunos
    avg(){
        this.media = 0
        Object.values(this.notasalunos).forEach(alunos => {
            this.media += alunos
        });
        this.media /= Object.keys(this.notasalunos).length
        return this.media
    }
    //Retorna a menor nota
    min(){
        return Math.min(...Object.values(this.notasalunos))
    }
    //Retorna a maior nota
    max(){
        return Math.max(...Object.values(this.notasalunos))
    }
    //Retorna as notas menores que o argumento informado
    lt(valor){
        return Object.values(this.notasalunos).filter((notas) => notas < valor)
    }
    //Retorna as notas maiores que o argumento informado
    gt(valor){
        return Object.values(this.notasalunos).filter((notas) => notas > valor)

    }
}

export default Exames;