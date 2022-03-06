
const arrayNums = [1, 2, 3, 4];

function multiplicaPorDez (num){
    return (num * 10) / 4;
}

const recebeMultiplicação = arrayNums.map(multiplicaPorDez);
console.log(`Números multiplicados ficaram assim: ${recebeMultiplicação}`)