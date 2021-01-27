"use strict";

const notas = [6, 7, 2, 9, 3, 4, 5, 8, 2];

var suma = 0;

for(var i = 0; i < notas.length; i++){

   suma += notas[i];
}

console.log(suma);

var suma2 = 0;

for (var nota of notas) {
    suma2 += nota;
}

console.log(suma2)