//Localizando alunos
//Método includes retorna verdadeiro ou falso
//indexOf retorna qual é o número do indice referido - retorna um número

const alunos = ['João' , 'Juliana' , 'Caio' , 'Ana'];
const mediasAlunos = [10 , 7 , 9 , 6];

let listaDeNotasEAlunos = [alunos, mediasAlunos];

const exibeNomeENota = (nomeDoAluno) => {

    if(listaDeNotasEAlunos[0].includes(nomeDoAluno)){ //usando o includes para saber se o parâmetros passado está no array de nomes[0], retorna true or false
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno);  // indexOf inclui o índice que se encontra o parâmetro passado e o armazena na variável indice
        return `${listaDeNotasEAlunos[0][indice]} sua nota é: ${listaDeNotasEAlunos[1][indice]}`;
    }else{
       //return "Aluno não está cadastrado na lista";
       listaDeNotasEAlunos[0].push(nomeDoAluno);
       return `Aluno adicionado a lista. Agora a Lista de nomes ficou assim: ${listaDeNotasEAlunos[0]}`;
    }
}

console.log(exibeNomeENota("Juliana"));