const repeatString = function(string, num) {

    if (num < 0) {
        return 'ERROR';
    }

    let resultado = "";

    let contador = 1;

    while (contador <= num) {
        resultado += string;
        contador++;
    }
    
    return resultado;
};

// Do not edit below this line
module.exports = repeatString;

