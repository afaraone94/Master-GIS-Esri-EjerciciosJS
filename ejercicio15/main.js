"use strict";

const scores = [{
        name: 'Christania Williams',
        country: 'Jamaica',
        time: 11.80
    },

    {
        name: 'Elaine Thompson',
        country: 'Jamaica',
        time: 10.71
    },

    {
        name: 'Tori Bowie',
        country: 'EEUU',
        time: 10.83
    },

    {
        name: 'Marie Josée Ta Lou',
        country: 'Irlanda',
        time: 10.86
    },

    {
        name: 'Dafne Schippers',
        country: 'Holanda',
        time: 10.90
    },

    {
        name: 'English Gardner',
        country: 'EEUU',
        time: 10.94
    },

    {
        name: 'Michelle-Lee Ahye',
        country: 'Trinidad',
        time: 10.92
    },

    {
        name: 'Shelly-Ann Fraser-Pryce',
        country: 'Jamaica',
        time: 10.86
    }

];

const winner = scores.reduce((a, b) => a.time < b.time ? a : b
);

console.log(winner);