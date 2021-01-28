"use strict";
function guarda() {
  alert('Guardando los datos');
};

// Al quitar el foco del input cambia de color
const inputNombre = document.querySelector(".name");

function cambiaColor() {
  inputNombre.style.backgroundColor = '#fff666';
};

function cambiaColor2() {
  inputNombre.style.backgroundColor = '#ffaa66';
};

const inputLetra = document.querySelector('.letra');

function minusculaMayuscula(event){
  const currentLetter = event.which;
  if (currentLetter === 97 || currentLetter === 101 || currentLetter === 111 || currentLetter === 117) {
    inputLetra.style.color = '#a8323e';
  } else {
    inputLetra.style.color = '#32a836';
  }
};