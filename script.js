function imprimirObjeto() {
    //digite a sua solução aqui
    const estudante = {
        nome: "Luiz Fernando",  //string
        sobrenove: "Forte",     //string
        matricula: 12345,       //numero
        notasemestre: [8, 5, 7]  //numero
    };
    estudante.modulo = "Módulo 3";
    //console.log(estudante);
    console.log(`O estudante ${estudante.nome}, tirou na segunda prova do semestre nota ${estudante.notasemestre[1]} e está no ${estudante.modulo}`);

    const novoestudante = {
        ...estudante,

    }
    novoestudante.nome = "astrodev";
    novoestudante.notasemestre.push(9);
    novoestudante.modulo = "Módulo 4";

    console.log(novoestudante, `${novoestudante.notasemestre[3]}`)

    let estudanteLabenu = [estudante, novoestudante]

    console.log(estudanteLabenu[0], estudanteLabenu[1])


}
imprimirObjeto()