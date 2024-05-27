document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', (event) => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const fabric = document.getElementById('fabric').value;
        const message = document.getElementById('message').value;
        
        if (!name || !email || !phone || !fabric || !message) {
            alert('Por favor, completa todos los campos.');
            event.preventDefault();
        }
    });

    // Esta seccion detecta cuando clicleamos a la seccion catalogo
    const catalogLink = document.querySelector('a[href="#catalogo"]');
    const catalogSection = document.getElementById('catalogo');

    catalogLink.addEventListener('click', (event) => {
        catalogSection.classList.remove('fade-in');
        void catalogSection.offsetWidth; 
        catalogSection.classList.add('fade-in');
    });
});
