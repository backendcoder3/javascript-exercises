const reverseString = function(text) {
  const arrayDeCaracteres = text.split(''); 

  const arrayInvertido = arrayDeCaracteres.reverse(); 

  const cadenaInvertida = arrayInvertido.join(''); 

  return cadenaInvertida;
};

// Do not edit below this line
module.exports = reverseString;
