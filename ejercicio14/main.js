"use strict";

const users = [

    {
        username: 'ppc90',
        age: 30,
        premium: false
    },

    {
        username: 'lu65',
        age: 24,
        premium: true
    },

    {
        username: 'maria3',
        age: 36,
        premium: false
    },

    {
        username: 'abc123',
        age: 30,
        premium: false
    },

    {
        username: 'sergio58',
        age: 30,
        premium: true
    },

];
console.log(users)


users.map(eachUser => {
    if (eachUser.premium == true) {
        console.log(`El usuario ${eachUser.username} es premium`)
    }
})

var notPremiumUsers = users.filter(eachUser => !eachUser.premium)

console.log(notPremiumUsers)