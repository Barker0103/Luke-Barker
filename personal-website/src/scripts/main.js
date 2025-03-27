document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".carousel-item");
    let currentIndex = 0;

    function showNextItem() {
        // Remove 'active' from the current item
        items[currentIndex].classList.remove("active");

        // Move to the next item
        currentIndex = (currentIndex + 1) % items.length;

        // Add 'active' to the new item
        items[currentIndex].classList.add("active");
    }

    // Auto-change every 5 seconds
    setInterval(showNextItem, 5000);
});


