document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuButton = document.querySelector(".mobile-menu-button");
    const navLinks = document.querySelector(".nav-links");

    // Toggle mobile menu
    mobileMenuButton.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!navLinks.contains(event.target) && !mobileMenuButton.contains(event.target)) {
            navLinks.classList.remove("show");
        }
    });
});
