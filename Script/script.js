document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuButton = document.querySelector('.mobile-menu-button');
    const navLinks = document.querySelector('.nav-links');
    
    menuButton.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // Service card animations
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // Doctor profile modal functionality
    const doctorCards = document.querySelectorAll('.doctor-card');
    const modal = document.getElementById('doctor-modal');
    const modalContent = document.querySelector('.modal-content');
    const closeBtn = document.querySelector('.close-modal');
    
    doctorCards.forEach(card => {
        card.addEventListener('click', function() {
            const doctorName = this.getAttribute('data-name');
            const doctorSpecialty = this.getAttribute('data-specialty');
            const doctorBio = this.getAttribute('data-bio');
            
            modalContent.innerHTML = `
                <h3 class="text-2xl font-bold mb-2">${doctorName}</h3>
                <p class="text-blue-500 mb-4">${doctorSpecialty}</p>
                <p class="text-gray-600">${doctorBio}</p>
            `;
            modal.classList.remove('hidden');
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.classList.add('hidden');
    });

    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });
});
document.getElementById('contrastToggle').addEventListener('click', function() {
    document.body.classList.toggle('high-contrast');
});

// Add high contrast styles
const style = document.createElement('style');
style.innerHTML = `
    .high-contrast {
        background-color: #000;
        color: #fff;
    }
    .high-contrast a {
        color: #16c2d5;
    }
`;
document.head.appendChild(style);