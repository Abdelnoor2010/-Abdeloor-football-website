// script.js
document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;

    // Change background color button
    const button = document.createElement('button');
    button.textContent = "Change Background Color";
    body.appendChild(button);

    button.addEventListener('click', function() {
        // Change the background color to a random color
        body.style.backgroundColor = getRandomColor();
    });

    // Function to generate a random color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
