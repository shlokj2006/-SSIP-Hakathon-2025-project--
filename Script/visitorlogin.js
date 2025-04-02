document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("visitorLoginForm");

    // Handle Form Submission
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Redirect to Visitor Dashboard
        window.location.href = "visitor-dashboard.html";
    });

    // Mobile Menu Toggle
    const mobileMenuButton = document.querySelector(".mobile-menu-button");
    const navLinks = document.querySelector(".nav-links");

    mobileMenuButton.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });

    document.addEventListener("click", function (event) {
        if (!navLinks.contains(event.target) && !mobileMenuButton.contains(event.target)) {
            navLinks.classList.remove("show");
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("visitorLoginForm");

    // Handle Form Submission
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Redirect to Visitor Dashboard
        window.location.href = "Visitordashboard.html";
    });

    // Mobile Menu Toggle
    const mobileMenuButton = document.querySelector(".mobile-menu-button");
    const navLinks = document.querySelector(".nav-links");

    mobileMenuButton.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });

    document.addEventListener("click", function (event) {
        if (!navLinks.contains(event.target) && !mobileMenuButton.contains(event.target)) {
            navLinks.classList.remove("show");
        }
    });
});
