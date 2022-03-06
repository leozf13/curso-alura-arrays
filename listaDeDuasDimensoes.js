//Lista de duas dimensões

const alunos = ['João' , 'Juliana' , 'Caio' , 'Ana'];
const mediasAlunos = [10 , 7 , 9 , 6];

let listaDeNotasEAlunos = [alunos, mediasAlunos];
console.log(`A média do aluno: ${listaDeNotasEAlunos[0][3]}, foi de: ${listaDeNotasEAlunos[1][3]}`); // visualmente é uma matriz, para acessar um elemento do awrray 
                                                                                                     //é preciso identificar a linha e coluna correspondente
console.log(listaDeNotasEAlunos);

