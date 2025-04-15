// Login Validation
document.getElementById('login-button').addEventListener('click', function() {
    const phoneInput = document.getElementById('phone');
    const passwordInput = document.getElementById('password');
    const phoneError = document.getElementById('phone-error');
    const passwordError = document.getElementById('password-error');
    const loginLoader = document.getElementById('login-loader');
    
    // Reset error messages
    phoneError.classList.add('hidden');
    passwordError.classList.add('hidden');
    
    // Validate phone number
    const phoneRegex = /^\d{10}$/;
    let isValid = true;
    
    if (!phoneRegex.test(phoneInput.value)) {
        phoneError.classList.remove('hidden');
        isValid = false;
    }
    
    if (passwordInput.value !== 'password') {
        passwordError.classList.remove('hidden');
        isValid = false;
    }
    
    if (isValid) {
        // Show loader
        loginLoader.classList.remove('hidden');
        
    }
});
