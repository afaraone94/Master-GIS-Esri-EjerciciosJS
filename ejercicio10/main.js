"use strict";

const number = [253, 8575, 1, 20, 562, 1233, 25, 27, 258, 254, 7485, 2683];

const oddNumber = number.filter(eachNumber => eachNumber % 2 == 0);

console.log(oddNumber);

const evenNumber = number.filter(eachNumber => eachNumber % 2 != 0);

console.log(evenNumber);