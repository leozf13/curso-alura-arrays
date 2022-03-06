//Calcular média utilizando o for
const notas = [10, 6.5, 8, 7.5];

const calculaMedia = (array) => { //arrow function que calcula a média utilizando-se do for
    let somaDasNotas = 0;

for(let i = 0; i < array.length; i++){
    somaDasNotas += array[i];
}

let mediaFinal = somaDasNotas / array.length;
return mediaFinal;

}

console.log(`A média final é: ${calculaMedia(notas)}`);

