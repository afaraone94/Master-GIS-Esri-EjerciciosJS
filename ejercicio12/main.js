"use strict";

const words = ['Environmental', 'Systems', 'Research', 'Institute'];

var wordReduce = words.reduce((a, b) => a.length < b.length ? b : a)

alert(wordReduce)

function longestString(arr) {
    let word = "";
    for (let i = 0; i < arr.length; i++) {
      if (word.length < arr[i].length) {
        word = arr[i];
      }
      return word
    }
  }

  console.log(longestString(words))