"use strict";

const times = [60, 75, 79, 80, 55, 59];

const sum = times.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

alert(sum/times.length)