//map para Padronizar nomes

let nomes = ['ana Julia' , 'Caio vinicius' , 'BIA silva'];
                                   //parametro
const nomesAtualizados =  nomes.map(nome => nome.toUpperCase()) // toUpperCase coloca todas as letras da string em MAIUSCULO


console.log(`Nomes padronizados ficaram assim: ${nomesAtualizados}`)


const nomedoCurso = "Fundamentos de JS";
const nomeDaPlataforma = " Alura"

const nomeCompleto = nomedoCurso.concat(nomeDaPlataforma)
console.log(nomeCompleto)  //Fundamentos de JS Alura


