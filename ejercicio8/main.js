"use strict";

var frase = prompt('Escribe una frase');

function sentenceType(frase) {
    if (frase === frase.toUpperCase()) {
        return 'Solo mayúsculas'
    } else if (frase === frase.toLowerCase()){
        return 'Solo minúsculas';
    } else {
        return 'Ambas';
    }
}

alert(sentenceType(frase));