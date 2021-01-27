"use strict";
const numero1 = 5;
const numero2 = 8;


if (numero1 < 8) {
    alert('El número1 no es mayor que el número2')
};

if (numero2 > -1) {
    alert('El número2 es positivo')
};

if (numero1 < 0) {
    alert("numero1 es negativo o distinto de cero");
}

if (++numero1 != numero2) {
    alert("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}