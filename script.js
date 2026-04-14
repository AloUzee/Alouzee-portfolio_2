// Complete Portfolio Functionality Script

// Data management functions
function fetchData() {
    // Code for data management
}

function saveData() {
    // Code for saving data
}

// Cursor animation
function setupCursorAnimation() {
    // Cursor animation logic
}

// Theme toggle functionality
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
}

// Smooth scrolling functionality
function smoothScroll(target) {
    const element = document.querySelector(target);
    window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
    });
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    setupCursorAnimation();
    document.querySelector('#theme-toggle').addEventListener('click', toggleTheme);
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            smoothScroll(this.getAttribute('href'));
        });
    });
});