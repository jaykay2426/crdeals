// Toggle menu button
function toggleMenu() {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav');    
    menu.classList.toggle('active');
    nav.classList.toggle('active');
}

// Change the background video when clicking on the gallery images
function changeVideo(name) {
    const bgVideoList = document.querySelectorAll('.bg-video');
    const models = document.querySelectorAll('.model');

    // Remove the 'active' class from all videos and models
    bgVideoList.forEach(video => {
        video.classList.remove('active');
        if (video.classList.contains(name)) {
            video.classList.add('active');
            video.play(); // Play the selected video
        } else {
            video.pause(); // Pause the non-selected videos
        }
    });

    // Remove the 'active' class from all models and add to the selected one
    models.forEach(model => {
        model.classList.remove('active');
        if (model.classList.contains(name)) {
            model.classList.add('active');
        }
    });
}

// Subscribe form functionality
document.addEventListener('DOMContentLoaded', function() {
    const subscribeForm = document.querySelector('.footer-subscribe form');
    subscribeForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const emailInput = subscribeForm.querySelector('input[type="email"]');
        const email = emailInput.value.trim();
        
        if (validateEmail(email)) {
            alert('Thank you for subscribing!');
            emailInput.value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
    
    // Toggle menu icon functionality
    const menuIcon = document.getElementById('menu-icon');
    const navbarLeft = document.querySelector('.navbar-left');
    
    menuIcon.addEventListener('click', function() {
        navbarLeft.classList.toggle('active');
        
        // Toggle between hamburger and times icon
        if (navbarLeft.classList.contains('active')) {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-times');
        } else {
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        }
    });

    // Signup form functionality
    const signupForm = document.querySelector(".signup-form");
    const passwordInputs = signupForm.querySelectorAll("input[type='password']");
    const togglePasswordIcons = signupForm.querySelectorAll(".toggle-password");

    // Password match and validation check
    signupForm.addEventListener("submit", function (event) {
        const password = passwordInputs[0].value;
        const confirmPassword = passwordInputs[1].value;

        if (password !== confirmPassword) {
            event.preventDefault();
            alert("Passwords do not match. Please check and try again.");
        } else if (!validatePassword(password)) {
            event.preventDefault();
            alert("Password must be at least 8 characters long, contain a mix of uppercase and lowercase letters, and include at least one number.");
        }
    });

    // Password validation function
    function validatePassword(password) {
        const minLength = 8;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);

        return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumber;
    }

    // Toggle password visibility
    togglePasswordIcons.forEach(icon => {
        icon.addEventListener("click", function () {
            const input = this.previousElementSibling;
            if (input.type === "password") {
                input.type = "text";
                this.classList.remove("fa-eye");
                this.classList.add("fa-eye-slash");
            } else {
                input.type = "password";
                this.classList.remove("fa-eye-slash");
                this.classList.add("fa-eye");
            }
        });
    });

    // Login form functionality
    const loginForm = document.querySelector(".login-form");
    const loginPasswordInput = loginForm.querySelector("input[type='password']");
    const loginErrorMessage = document.getElementById("error-message");

    // Password validation function for login form
    function validateLoginPassword(password) {
        const minLength = 8;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);

        if (password.length < minLength) {
            return "Password must be at least 8 characters long.";
        }
        if (!hasUpperCase) {
            return "Password must contain at least one uppercase letter.";
        }
        if (!hasLowerCase) {
            return "Password must contain at least one lowercase letter.";
        }
        if (!hasNumber) {
            return "Password must contain at least one number.";
        }
        return "";
    }

    // Password validation check for login form
    loginForm.addEventListener("submit", function (event) {
        const password = loginPasswordInput.value;
        const error = validateLoginPassword(password);

        if (error) {
            event.preventDefault();
            loginErrorMessage.textContent = error;
            loginErrorMessage.style.display = "block";
        } else {
            loginErrorMessage.style.display = "none";
        }
    });

    // Reset password form functionality
    const resetForm = document.getElementById('reset-form');
    resetForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        // Display the alert message
        var alertMessage = document.getElementById('alert-message');
        alertMessage.style.display = 'block';
        
        // Simulate an asynchronous operation (e.g., sending a reset password email)
        setTimeout(function() {
            alertMessage.style.display = 'none';
            alert('Password reset link has been sent to your email.');
            // Optionally, redirect to another page or perform other actions here
        }, 3000); // Adjust the delay as needed
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.querySelector("input[placeholder='Password']");
    const confirmPasswordInput = document.querySelector("input[placeholder='Confirm Password']");
    const submitButton = document.querySelector("button[type='submit']");
    const passwordContainer = document.querySelector('.password-container');

    // Function to check if passwords match
    function checkPasswordsMatch() {
        if (passwordInput.value !== confirmPasswordInput.value) {
            confirmPasswordInput.setCustomValidity("Passwords do not match.");
        } else {
            confirmPasswordInput.setCustomValidity("");
        }
    }

    // Add event listeners for real-time validation
    passwordInput.addEventListener("input", checkPasswordsMatch);
    confirmPasswordInput.addEventListener("input", checkPasswordsMatch);

    // Toggle password visibility
    const togglePasswordIcons = document.querySelectorAll(".toggle-password");
    togglePasswordIcons.forEach(icon => {
        icon.addEventListener("click", function () {
            const input = this.previousElementSibling;
            if (input.type === "password") {
                input.type = "text";
                this.classList.remove("fa-eye");
                this.classList.add("fa-eye-slash");
            } else {
                input.type = "password";
                this.classList.remove("fa-eye-slash");
                this.classList.add("fa-eye");
            }
        });
    });
});





