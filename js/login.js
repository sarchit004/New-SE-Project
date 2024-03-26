document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    let username = document.getElementById('username').value; 
    let password = document.getElementById('password').value; 

    if (username === "user123" && password === "password123") { 
        window.location.href = "../html/home.html";
        alert("Login successful");
    } else { 
        alert("Invalid Username or password");
    }
});
