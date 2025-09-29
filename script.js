// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    
    const header = document.querySelector('#main-header');

    // Listen for the scroll event on the window
    window.addEventListener('scroll', function() {
        // Check if the user has scrolled more than 50 pixels from the top
        if (window.scrollY > 50) {
            // If yes, add the 'scrolled' class to the header
            header.classList.add('scrolled');
        } else {
            // If no (at the top), remove the 'scrolled' class
            header.classList.remove('scrolled');
        }
    });

});