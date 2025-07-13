const arregloValores = [
    {
        number: 1,
        label : 'uno',
    },
    {
        number:2,
    }
];
const metodoArreglo = (parametros : typeof arregloValores): void =>{
    const indexArry = [1,2];
    // error-me sigue mandando el labal de tipo string | undifined
    indexArry.forEach( (index) => {
        if (parametros[index].label) {
            console.log(parametros[index].label); 
        }
    });
    // solucion - guardar un espacio en memoria para ayudar a 
    // typescripte a que infiera el tipo de dato correct
    indexArry.forEach( (index) => {
        const valor = parametros[index];
        if (valor.label) {
            console.log(valor.label); 
        }
    });
}