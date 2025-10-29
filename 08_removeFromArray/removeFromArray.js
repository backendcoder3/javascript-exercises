const removeFromArray = function(arr, ...elements) {

    return arr.filter(item => !elements.includes(item));
};

// No edites la línea de exportación
module.exports = removeFromArray;