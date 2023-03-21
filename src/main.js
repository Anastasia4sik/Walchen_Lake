/* eslint-disable no-unused-vars */
'use strict';

// eslint-disable-next-line no-undef
const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    formatFractionCurrent: function(number) {
      return number;
    },
  },
});

const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  this.reset();
});

const allSliders = document.querySelectorAll('.swiper-container');
