"use strict";

const abecedario = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z',
    'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var numeroDNI = prompt('Escribe tu número de DNI');

if (numeroDNI > 99999999 || numeroDNI < 0) {
    alert('el número no es válido')
} else {
    var letraDNI = numeroDNI % 23
    alert(abecedario[letraDNI])
}