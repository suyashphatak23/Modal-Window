'use strict';

const btnElements = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.close-modal');

const openModal = function () {
  console.log(`Show modal button clicked`);
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  console.log('Close modal button clicked');
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnElements.length; i++) {
  btnElements[i].addEventListener('click', openModal);
}

close.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
  }
});
