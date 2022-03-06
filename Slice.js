//Dividindo com slice

const nomes = ['Leonardo' , 'Mariana' ,
'Fernando' , 'Luiz' , 'Liziê' , 'Luana' , 
'Camila' , 'Viviane' , 'Ângela' , 'Mary'];

const sala1 = nomes.slice(0, nomes.length/2); //Dois parâmetros, onde começa e aonde vai terminar a divisão do array. vai parar na metade do array
const sala2 = nomes.slice(nomes.length/2); // se eu não colocar aonde termina ele vai até o final do array

console.log(`A sala um ficou assim: ${sala1}`)
console.log(`A sala dois ficou assim: ${sala2}`)

console.log(`A sala um tem ${sala1.length} alunos`)

