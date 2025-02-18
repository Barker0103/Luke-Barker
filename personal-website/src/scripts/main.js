document.addEventListener('DOMContentLoaded', () => {
    const greeting = document.getElementById('greeting');
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    
    greeting.textContent = `Welcome to my personal website! Today is ${currentDate.toLocaleDateString('en-US', options)}.`;

    const toggleButton = document.getElementById('toggle-theme');
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });
});