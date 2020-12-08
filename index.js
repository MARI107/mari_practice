'use strict';
{
  var open = document.getElementById('open');
  var overlay = document.querySelector('.overlay');
  var close = document.getElementById('close');

  open.addEventListener('click', () => {
    let element = document.getElementById('header');
    element.style.color = '#0000FF';
    overlay.classList.add('show');
    close.classList.add('show');
    open.classList.add('hide');
  });
  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    close.classList.remove('show');
    open.classList.remove('hide');
  });
}