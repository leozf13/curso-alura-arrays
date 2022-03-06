//concatenando arrays

const salaDePhyton = ['Melissa' , 'Helena' , 'Rodrigo'];
const salaDeJavascript = ['Juliana' , 'Leonardo' , 'Raquel'];

const salasUnificadas = salaDePhyton.concat(salaDeJavascript); // Concat não altera os arrays originais, por isso é necessário chamá-lo em uma nova constanteg
console.log(`As salas unificadas ficaram assim: ${salasUnificadas}`);
