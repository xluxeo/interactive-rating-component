document.addEventListener('DOMContentLoaded', () => {
  const ratingForm = document.querySelector('#rating-form');
  const thanksCard = document.querySelector('#thanks-card'); 
  const ratingValue = document.querySelector('.c-thanks__rating-value');


  if (!ratingForm || !thanksCard || !ratingValue) return;

  ratingForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(ratingForm);
    const selectedRating = formData.get('rating');

    if (selectedRating) {
      ratingValue.textContent = selectedRating;
      ratingForm.setAttribute('hidden', '');
      thanksCard.removeAttribute('hidden');
    }
  });
});
