"use strict";
let burger = document.querySelector('.burger');
let burgerMenu = document.querySelector('.burgerMenu');
let background = document.querySelector('.background');
burger.addEventListener('click', function () {
  burgerMenu.style.display = 'flex';
  background.style.opacity = 0.5;
  background.style.pointerEvents = 'none';
});
let burgerClose = document.querySelector('.burgerClose');
burgerClose.addEventListener('click', function () {
  burgerMenu.style.display = 'none';
  background.style.opacity = 1;
  background.style.pointerEvents = 'auto';
});
window.addEventListener('resize', function () {
  if (window.innerWidth > 800) {
    burgerMenu.style.display = 'none';
    background.style.opacity = 1;
    background.style.pointerEvents = 'auto';
  }
})
