document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    // Check if the password length is less than 8 characters
    if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return; // Stop the form submission process
    }

    // Simple validation (in real applications, use more secure methods)
    if ((username === 'lokeshreddy24' || username === 'lokeshreddy24@gmail.com') && password === 'Lokesh@123') {
        message.style.color = 'green';
        message.textContent = 'Login successful!';   
        // Redirect to another page
        window.location.href = 'project.html'; // Change 'project.html' to your desired page
    } else {
        message.style.color = 'red';
        alert('Incorrect username or password.');
    }
});

 