function validateForm() {
    var userId = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // List of valid user IDs and corresponding passwords
    var validUsers = {
        "lokeshreddy24": "Lokesh@123",
        "lokeshreddyyrasrasni23@gmail.com": "lokesh123",
        "lokeshreddyyarasani24@gmail.com": "Lokesh@123"
    };

    // Check if the user ID is valid
    if (!validUsers.hasOwnProperty(userId)) {
        alert("Invalid user ID. Please enter a valid user ID.");
        return false;
    }

    // Check if the password is correct
    if (validUsers[userId] !== password) {
        alert("Incorrect password. Please enter the correct password.");
        return false;
    }

    // Redirect to another page if the user ID and password are correct
    window.location.href = "flipkart.html";
    return false; // Prevent the default form submission
}
