// admin-login.js

// Function to verify password
function verifyPassword(inputPassword) {
    // Assuming we have a predefined admin password
    const adminPassword = 'yourAdminPassword'; // Change this to your actual password
    return inputPassword === adminPassword;
}

// Function to authenticate admin and store in sessionStorage
function authenticateAdmin() {
    const inputPassword = prompt('Enter Admin Password:');
    if (verifyPassword(inputPassword)) {
        sessionStorage.setItem('isAdmin', 'true');
        alert('Admin authenticated successfully!');
    } else {
        alert('Authentication failed.');
    }
}

// Example usage
// authenticateAdmin();