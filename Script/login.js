document.addEventListener("DOMContentLoaded", function () {
    const patientLoginBtn = document.getElementById("patientLogin");
    const staffLoginBtn = document.getElementById("staffLogin");
    const loginForm = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const loginTitle = document.getElementById("loginTitle");
    const forgotPassword = document.getElementById("forgotPassword");
    
    let userType = "";

    function showLoginForm(type) {
        userType = type;
        loginForm.style.display = "block"; // Show login form
        usernameInput.value = "";
        passwordInput.value = "";
        loginTitle.innerText = `Login as ${type}`;

        // Update button styles dynamically
        if (type === "Patient") {
            patientLoginBtn.classList.add("active");
            staffLoginBtn.classList.remove("active");
        } else {
            staffLoginBtn.classList.add("active");
            patientLoginBtn.classList.remove("active");
        }
    }

    patientLoginBtn.addEventListener("click", function () {
        showLoginForm("Patient");
    });

    staffLoginBtn.addEventListener("click", function () {
        showLoginForm("Staff");
    });

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = usernameInput.value.trim();
        const password = document.getElementById("password").value.trim();

        if (username === "" || password === "") {
            alert("Please enter both username and password.");
            return;
        }

        if (userType === "Patient" && username === "patient" && password === "12345") {
            alert("Welcome, Patient! Redirecting...");
            window.open('patient.html');
        } else if (userType === "Staff" && username === "staff" && password === "admin123") {
            alert("Welcome, Staff! Redirecting...");
            window.open('staffdashboard.html');
        } else {
            alert("Invalid credentials! Please try again.");
        }
    });

    forgotPassword.addEventListener("click", function () {
        alert("Please contact support at support@jagrutsevakendra.com.");
    });
});
