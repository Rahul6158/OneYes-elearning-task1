    function toggleMenu() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('active'); // Toggles the active class
    }


    window.onload = function() {
        document.querySelector('p.fade-in').classList.add('show');
    };

    document.addEventListener('DOMContentLoaded', function () {
        const headerText = document.querySelector('header h1');
        headerText.classList.add('loaded');
    });
    
    function delayNavigation(event, url) {
        event.preventDefault(); // Prevent immediate navigation
        setTimeout(() => {
            window.location.href = url; // Navigate after 5 seconds
        }, 3000); // 5000 milliseconds = 5 seconds
    }
