//Método filter, filtrando informações

const nomesAlunos = ['Ana' , 'Marcos' , 'Maria' , 'Mauro'];
const notasAlunos = [5.9, 4.5, 8, 7.5];

const reprovados = nomesAlunos.filter((alunos, indice) => notasAlunos[indice] < 6) // filtter retorna true or false. Inclui o que for verdadeiro na variável que o está recebendo, no caso reprovados

const aprovados = nomesAlunos.filter((_, indice) => notasAlunos[indice] > 7) // como variavel alunos não está sendo usada, podemos substituir por _ underline

console.log(`Lista de reprovados: ${reprovados}`)
console.log(`Lista de aprovados: ${aprovados}`)