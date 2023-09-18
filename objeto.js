class Exames{
    constructor(weight, answer){
        this.weight = weight
        this.exam = {}
        this.answer = answer
        this.notasalunos = {}
    }
    add(aluno=String,exame=Array){
        this.exam[aluno] = exame
    }
    notas(){
        Object.keys(this.exam).forEach(element => {
            this.notasalunos[element] = 
            Object.keys(this.exam[element]).filter((questoes) => this.exam[element][questoes] == this.answer[questoes]).reduce((notas,i) => notas += this.weight[i],0)
        });
    }
    avg(){
        this.media = 0
        Object.values(this.notasalunos).forEach(alunos => {
            this.media += alunos
        });
        this.media /= Object.keys(this.notasalunos).length
        return this.media
    }
    min(){
        return Math.min(...Object.values(this.notasalunos))
    }
    max(){
        return Math.max(...Object.values(this.notasalunos))
    }
    lt(valor){
        return Object.values(this.notasalunos).filter((notas) => notas < valor)
    }
    gt(valor){
        return Object.values(this.notasalunos).filter((notas) => notas > valor)

    }
}

export default Exames;