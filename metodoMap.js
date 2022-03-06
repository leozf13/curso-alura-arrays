//Método Map
const notas = [4, 9, 8, 7, 6];
                                 //função  //condição  // ? = é verdadeiro?
const notasAtualizadas = notas.map(rola => rola == 10 ? //arrown function dentro de uma callback e utilizando operador ternário para comparar se a nota não é 10 // rola recebe o array notas
rola : ++rola); //++ antes de nota pois primeiro para primeiro somar 1 e depois retornar o valor de nota || nota é uma varável criada para receber o array notas
    // : = falso
    //fim da funão
console.log(notasAtualizadas) // array modificado em +1 ficou armazenado em notasAtualizadas

//Diferença entre o forEach e o map : forEach não retorna nada, só executa o que está dentro do bloco. || O map retorna tudo o que ele faz dentro da função. Quando precisamos salvar esse valor.

function atualizandoNotas (testa) { //testa é a variavel dentro deste bloco que está recebendo o array de notas
    testa == 10 ? testa : ++testa;   //if ternário
    return testa;
}

console.log(`Notas atualizadas com outro método: ${notas.map(atualizandoNotas)}`)
