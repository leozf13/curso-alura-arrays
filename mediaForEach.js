//Media utilizando forEach

const notas = [10, 6.5, 8, 7.5];
let somaDasNotas = 0;

notas.forEach (nota => { // Função call back. Neste caso nota é um paramêtro que vai percorrer todo o array. Foi declarado como arrow function mas pode ser declarado como function tbm.
    somaDasNotas += nota;
})

let media = somaDasNotas / notas.length;
console.log(`A média das notas é: ${media}`)