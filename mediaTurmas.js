//Reduce para calcular médias
const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];

const salaJava = [6, 5, 8, 9, 5, 6];

const salaPython = [7, 3.5, 8, 9.5];

function mediaSalas(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acumulador, valorAtual) => // precisa de uma função // reduz todos os valores do array a um único valor, sempre dois parametros, método de loop
    valorAtual + acumulador, 0) //0 é o valor que o acumulador vai iniciar
    return somaDasNotas / notasDaSala.length;
}

console.log(`A média da sala de Javascript foi de: ${mediaSalas(salaJS)}`)

console.log(`A média da sala de Javascript foi de: ${mediaSalas(salaJava)}`)

console.log(`A média da sala de Javascript foi de: ${mediaSalas(salaPython)}`)

// ------------------- Exemplo da primeira aula -----------------

const notas = [10, 6.5, 8, 7];

const medias = notas.reduce((acum, atual) =>  atual + acum, 0) /notas.length

console.log(`A média da turma da aula 01 foi de: ${medias}`)