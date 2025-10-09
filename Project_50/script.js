const card = document.querySelector('.card');
const text = card.querySelector('p');

card.addEventListener('mouseenter', () => {
  text.textContent = 'Hello Gopal';
});

card.addEventListener('mouseleave', () => {
  text.textContent = 'Hello';
});
