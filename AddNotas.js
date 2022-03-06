//Adicionando itens ao array

/*function calculaMedias(medias){

    let soma = 0;
    let result = 0;
    for(let indice = 0; indice < medias.length;){
        soma = soma + medias[indice];
        indice = indice +1;
    }
    result = soma / medias.length;
    return result;
}*/

//let notas = [6.5, 7, 10, 5];

const calculaMedias = (medias) => { // usando arrow function criei uma função que realiza a média do aluno
    let soma = 0;
    let result = 0;

    for(let indice = 0; indice < medias.length; indice++){
        soma = soma + medias[indice];
    }

    result = (soma / medias.length);
    return result;
}

const addArray = (adicionar, testa) => {
    testa.push(adicionar); // Push insere o elemento na última posição do array
    return testa;
}

const delArray = (array) => {
    array.pop();   // Deleta o elemento no último índice do array
    return array;
}

let notas = [7, 7, 7, 7];

console.log(`A média do aluno é: ${calculaMedias(notas)}`);

console.log(`O array com uma nova nota inserida agora é: ${addArray(9, notas)}`);

console.log(`O array com a última nota removida agora é: ${delArray(notas)}`);
