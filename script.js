document.addEventListener('DOMContentLoaded', function() {
    const photos = document.querySelectorAll('.photo');
    const card = document.createElement('div');
    card.classList.add('card');
    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');
    const closeButton = document.createElement('span');
    closeButton.classList.add('close');
    closeButton.textContent = '×';

    closeButton.addEventListener('click', function() {
        card.style.display = 'none';
    });

    cardContent.appendChild(closeButton);
    card.appendChild(cardContent);
    document.body.appendChild(card);

    photos.forEach(photo => {
        photo.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').src;
            const backText = this.getAttribute('data-back');

            cardContent.innerHTML = `<span class="close">×</span><img src="${imgSrc}" alt="Büyütülmüş Fotoğraf"><p>${backText}</p>`;
            card.style.display = 'flex';
        });
    });
});
