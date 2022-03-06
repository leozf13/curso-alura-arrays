//Callbacks

const nomes = ['Ana' , 'Ju' , 'Leo' , 'Paula'];
const nomesCompletos = ['Ana Paula' , 'Juliana Vieira' , 'Leonardo Facini' , 'Paula Thejannu'];
const notasAlunos = [9, 7, 4, 6];
let hibrida = [nomes, nomesCompletos, notasAlunos];

//nomes.forEach(imprimeNomes => { //call back usando arrow function, criando a funçando dentro do forEach
  //  console.log(imprimeNomes)
//})

function imprimindoNomes (nomes2){ // Aqui declarei a função que irá realizar a impressão dos nomes separadamente // melhor para usar em vários arrays
    console.log(`A Matriz contém os nomes: ${nomes2}`);
}

//nomes.forEach(imprimindoNomes); // E aqui chamo a função que imprime através do forEach
//nomesCompletos.forEach(imprimindoNomes);
hibrida.forEach(imprimindoNomes);
