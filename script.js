// script.js

// Portfolio functionality

const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
        // Add additional functionality as needed
    });
});

// Cursor Animation
const cursor = document.createElement('div');
cursor.style.width = '10px';
cursor.style.height = '10px';
cursor.style.borderRadius = '50%';
cursor.style.position = 'absolute';
cursor.style.backgroundColor = 'rgba(255, 0, 0, 0.7)';
document.body.appendChild(cursor);

document.addEventListener('mousemove', (event) => {
    cursor.style.left = `${event.pageX}px`;
    cursor.style.top = `${event.pageY}px`;
});