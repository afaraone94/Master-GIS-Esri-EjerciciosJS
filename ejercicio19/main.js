"use strict";
document.querySelector(".guardar").addEventListener("click", guarda);

function guarda() {
  alert('Guardando los datos');
};

const inputNombre = document.querySelector(".name");

inputNombre.addEventListener('focus', cambiaColor);
function cambiaColor() {
    inputNombre.style.backgroundColor = '#fff666';
};

inputNombre.addEventListener('focusout', cambiaColor2);
function cambiaColor2() {
    inputNombre.style.backgroundColor = '#ffaa66';
};

const inputLetra = document.querySelector('.letra');

inputLetra.addEventListener('keypress', minusculaMayuscula);
function minusculaMayuscula(event){
  const currentLetter = event.which;
  if (currentLetter === 97 || currentLetter === 101 || currentLetter === 105 || currentLetter === 111 || currentLetter === 117) {
    inputLetra.style.color = '#a8323e';
  } else {
    inputLetra.style.color = '#32a836';
  }
};