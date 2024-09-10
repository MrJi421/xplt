

document.addEventListener('DOMContentLoaded', function() {
    const logoutBtn = document.getElementById('logoutBtn');
    
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            // Logic for logging out
            // For example, redirect to the login page or clear user session
            window.location.href = 'studentDashboard.html'; // Redirect to login page
        });
    }
});
