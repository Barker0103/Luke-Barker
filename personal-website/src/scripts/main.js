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

document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
        });

        if (localStorage.getItem("theme") === "dark") {
            document.body.classList.add("dark-mode");
        }
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    const contactForm = document.getElementById("contactForm");

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
        });

        if (localStorage.getItem("theme") === "dark") {
            document.body.classList.add("dark-mode");
        }
    }

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            document.getElementById("formResponse").innerText = "Thank you for reaching out! I'll get back to you soon.";
            contactForm.reset();
        });
    }
});

