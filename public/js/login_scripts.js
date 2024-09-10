document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Basic form validation
        const username = document.getElementById('username');
        const password = document.getElementById('password');
        const usernameFeedback = username.nextElementSibling;
        const passwordFeedback = password.nextElementSibling;

        let valid = true;

        if (username.value.trim() === '') {
            username.classList.add('is-invalid');
            usernameFeedback.style.display = 'block';
            valid = false;
        } else {
            username.classList.remove('is-invalid');
            usernameFeedback.style.display = 'none';
        }

        if (password.value.trim() === '') {
            password.classList.add('is-invalid');
            passwordFeedback.style.display = 'block';
            valid = false;
        } else {
            password.classList.remove('is-invalid');
            passwordFeedback.style.display = 'none';
        }

        if (valid) {
            showAlert('Login successful!', 'success');
            setTimeout(() => {
                goToSDash()
            }, 2000);
            
        } else {
            showAlert('Login failed. Please check your credentials.', 'danger');
        }
    });
});

function goToSDash(){
    window.location.href = 'studentDashboard.html';
}

function showAlert(message, type) {
    const alertContainer = document.getElementById('alertContainer');
    const alertDiv = document.createElement('div');
    
    // Determine the alert type class
    const alertTypeClass = type === 'success' ? 'alert-success' : 'alert-error';
    
    alertDiv.className = `alert ${alertTypeClass}`;
    alertDiv.innerHTML = `
        ${message}
        <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
    `;

    // Append the alert to the container
    alertContainer.appendChild(alertDiv);

    // Show and animate the alert
    alertDiv.style.display = 'block';
    alertDiv.style.animation = 'slideDown 0.5s ease-out';

    // Automatically remove the alert after 5 seconds
    setTimeout(() => {
        alertDiv.style.animation = 'slideUp 0.5s ease-in';
        setTimeout(() => alertDiv.remove(), 500); // Remove after animation
    }, 5000);
}


function showPopup() {
    document.getElementById('popup').style.display = 'flex';
}

function hidePopup() {
    document.getElementById('popup').style.display = 'none';
}


