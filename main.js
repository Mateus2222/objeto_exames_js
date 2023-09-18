import Exames from './objeto.js'

const prova1 = {1:'a',2:'b',3:'c'}
const prova2 = {1:'a',2:'b',3:'a'}

const provas = new Exames({1:3,2:4,3:3}, {1:'a',2:'b',3:'a'})
provas.add('Mateus',prova1)
provas.add('Maria',prova2)

provas.notas()
console.log(provas)

provas.avg()
console.log(provas.min())
console.log(provas.max())

console.log(provas.gt(6))
console.log(provas.lt(6))