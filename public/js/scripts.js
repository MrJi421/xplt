// 
// toogle animation and managment
// 

function toggleDetails(roundId) {
    const details = document.getElementById(roundId);
    if (details.style.display === "block") {
        details.style.display = "none";
    } else {
        // Hide all other details
        document.querySelectorAll('.details').forEach(detail => {
            detail.style.display = "none";
        });
        // Show the clicked detail
        details.style.display = "block";
    }
}

// 
// section animation
// 
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1); // Get target ID
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Scroll smoothly to the target element
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const popup = document.getElementById('timeline-popup');

    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const info = this.getAttribute('data-info');
            popup.textContent = info;
            popup.style.display = 'block';
            // Adjust position if necessary
            const rect = this.getBoundingClientRect();
            popup.style.top = `${rect.top + window.scrollY - popup.offsetHeight}px`;
            popup.style.left = `${rect.left + this.offsetWidth / 2 - popup.offsetWidth / 2}px`;
        });

        item.addEventListener('mouseleave', function() {
            popup.style.display = 'none';
        });
    });
});
