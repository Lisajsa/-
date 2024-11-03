const heart = document.getElementById('heart');
const fireworks = document.getElementById('fireworks');

heart.addEventListener('animationiteration', () => {
    heart.style.animation = 'none'; // Stop the heart animation
    heart.style.bottom = '200px'; // Move the heart up
    heart.style.transition = 'bottom 1s ease'; // Animate to the top

    setTimeout(() => {
        fireworks.style.display = 'block'; // Show fireworks
        createFireworks(); // Trigger fireworks
        heart.style.transform = 'translateX(-50%) rotate(0deg)'; // Reset heart position

        setTimeout(() => {
            heart.style.animation = 'float 2s infinite'; // Restart heart animation
            heart.style.bottom = '0'; // Reset heart position
            fireworks.style.display = 'none'; // Hide fireworks
        }, 2000); // Duration of fireworks
    }, 1000); // Time before explosion
});

// Function to create fireworks
function createFireworks() {
    for (let i = 0; i < 30; i++) {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        firework.style.left = `${Math.random() * 100}%`;
        firework.style.bottom = '0';
        fireworks.appendChild(firework);

        // Random animation duration and upward movement
        const duration = Math.random() * 0.5 + 0.5;
        firework.style.animationDuration = `${duration}s`;
        firework.style.transform = `translateY(${Math.random() * 200 + 100}px)`;

        // Remove firework after animation
        setTimeout(() => {
            firework.remove();
        }, duration * 1000); // Adjusted to match animation duration
    }
}
