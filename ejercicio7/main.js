"use strict";

var numero = prompt('Escribe un número');

function oddEven(numero) {
    if (numero % 2 === 0) {
        return 'El número escrito es par';
    } else {
        return 'El número escrito es impar';
    }
}

alert(oddEven(numero));