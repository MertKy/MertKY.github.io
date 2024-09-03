// Ana Sayfadaki butona tıklama olayı
document.addEventListener('DOMContentLoaded', () => {
    const alertButton = document.getElementById('alertButton');

    if (alertButton) {
        alertButton.addEventListener('click', () => {
            alert('Butona tıkladınız!');
        });
    }

    // İletişim formunu kontrol etme
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Formun sayfayı yeniden yüklemesini engelle
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            alert(`Adınız: ${name}\nEmail: ${email}\nMesajınız: ${message}`);
        });
    }
});
