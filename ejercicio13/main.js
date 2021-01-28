"use strict";

const month = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

var monthUpper = month.filter (eachMonth => eachMonth.length > 7).map(eachMonth => eachMonth.toUpperCase())

console.log(monthUpper)

 var numberMonths = monthUpper.length

 console.log(numberMonths)