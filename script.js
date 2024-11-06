document.addEventListener('DOMContentLoaded', function () {
    // Get elements
    const mainText = document.querySelector('.main-text');
    const btn = document.querySelector('.btn');

    // Function to animate the main text (bouncing and fading in)
    function animateText() {
        mainText.style.transition = 'opacity 1s ease, transform 1s ease';
        mainText.style.opacity = '1';
        mainText.style.transform = 'scale(1)';
    }

    // Function to animate the button (scale and fade in)
    function animateButton() {
        btn.style.transition = 'opacity 1s ease, transform 0.3s ease';
        btn.style.opacity = '1';
        btn.style.transform = 'scale(1)';
    }

    // Call animations with delays
    setTimeout(animateText, 500); // Delay for text animation
    setTimeout(animateButton, 1500); // Delay for button animation

    // Button click event to show an alert
    btn.addEventListener('click', function () {
        alert('You clicked the button! Jacob is indeed cool!');
    });
});
