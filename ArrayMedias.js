//Medias 10, 6.5, 8, 7.5

/*let nota1 = 10;
let nota2 = 6.5;
let nota3 = 8;
let nota4 = 7.5;

let media = (nota1 + nota2 + nota3 + nota4) / 4;
console.log(`A média de notas do aluno é ${media}`); */

//Agora usando o método de arrays
// Cada posição do array é chamada de índice, o índice começa sempre em 0


const notas = [10, 6.5, 8, 7.5];
let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length; //o LENGTH retorna o tamanho do array, neste caso um array de 4 posições
console.log(`A média de notas do aluno foi: ${media}!!! PARABÉNS!!!`);