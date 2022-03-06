// Atualizando lista com splice
                        //0      //1
const listaDeChamada = ['João' , 'Ana' 
, 'Caio' , 'Lara' , 'Marjorie' , 'Leo'];
console.log(`A lista de chamada inicial era assim: ${listaDeChamada}`)

listaDeChamada.splice(1, 2, 'Rodrigo'); // Splice usada para remover índices de lugares específicos, escolhe o índice inicial, a quantidade que vai remover e no terceiro parâmetro inseri um novo item, caso queira.
console.log(`A lista de chamada atualizada ficou assim: ${listaDeChamada}`)

listaDeChamada.splice(2, 0, 'Renata'); // Adiciona a Renata no índice 2, sem remover ninguém da lista
console.log(`A lista de chamada apenas adicionando, ficou assim: ${listaDeChamada}`)

const procuraDeletaNome = (listas, nomeDigitado) => { //Arrow function que recebe uma lista e um nome. Procura o nome no array e o deleta.
    for(let indice =  0; indice < listas.length; indice++){
        if(listas[indice] == nomeDigitado){
            listas.splice(indice, 1);
        }
    }
    return listas;
}

console.log(`A lista final ficou assim: ${procuraDeletaNome(listaDeChamada, 'João')}`)