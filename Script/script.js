document.addEventListener("DOMContentLoaded", function () {
    // Mobile Menu Toggle
    const mobileMenuButton = document.querySelector(".mobile-menu-button");
    const navLinks = document.querySelector(".nav-links");

    if (mobileMenuButton) {
        mobileMenuButton.addEventListener("click", function () {
            navLinks.classList.toggle("hidden");
        });
    }

    // Doctor Modal Functionality
    const doctorCards = document.querySelectorAll(".doctor-card");
    const modal = document.getElementById("doctor-modal");
    const modalContent = document.querySelector(".modal-content");
    const closeModal = document.querySelector(".close-modal");

    doctorCards.forEach((card) => {
        card.addEventListener("click", function () {
            const name = card.getAttribute("data-name");
            const specialty = card.getAttribute("data-specialty");
            const bio = card.getAttribute("data-bio");

            modalContent.innerHTML = `
                <h3 class="text-xl font-semibold">${name}</h3>
                <p class="text-blue-500">${specialty}</p>
                <p class="text-gray-600">${bio}</p>
            `;
            modal.classList.remove("hidden");
        });
    });

    if (closeModal) {
        closeModal.addEventListener("click", function () {
            modal.classList.add("hidden");
        });
    }

    // High Contrast Mode
    const contrastToggle = document.getElementById("contrastToggle");
    if (contrastToggle) {
        contrastToggle.addEventListener("click", function () {
            document.body.classList.toggle("high-contrast");
        });
    }
});
