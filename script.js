// Sayfa yüklendiğinde çalışacak kodlar
document.addEventListener('DOMContentLoaded', () => {
    // Ana sayfadaki buton işlevi
    const alertButton = document.getElementById('alertButton');
    if (alertButton) {
        alertButton.addEventListener('click', () => {
            alert('Butona tıkladınız!');
        });
    }

    // İletişim formunu işleme
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Formun sayfayı yeniden yüklemesini engelle

            // Form verilerini al
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Verileri kontrol etmek için bir uyarı göster
            alert(`Adınız: ${name}\nEmail: ${email}\nMesajınız: ${message}`);

            // Burada veriyi sunucuya gönderme kodu ekleyebilirsiniz
        });
    }
});
