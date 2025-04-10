// Theme Toggle
document.addEventListener("DOMContentLoaded", () => {
    const themeBtn = document.getElementById("themeToggle");
    
    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-theme");
        });
    }
});
document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the form from submitting

    // Get the values of name and message inputs
    const name = document.getElementById("nameInput").value.trim();
    const message = document.getElementById("messageInput").value.trim();

    // Check if any of the fields are empty
    if (name === "" || message === "") {
        alert("Please fill out all fields.");
    } else {
        // Display the custom greeting
        document.getElementById("response").innerText = `Thanks, ${name}. We'll get back to you soon!`;

        // Optional: reset form after submission
        e.target.reset();
    }
});
// Listen for the button click to load the user list
document.getElementById("loadUsersBtn").addEventListener("click", async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users'); // Fetch user data
        const users = await res.json(); // Parse the JSON response
        const userList = document.getElementById("userList");
        userList.innerHTML = ""; // Clear the list before adding new users
        users.forEach(user => {
            const li = document.createElement("li"); // Create a new list item
            li.textContent = user.name; // Set the user name as the list item text
            userList.appendChild(li); // Append the list item to the user list
        });
    } catch (err) {
        console.error("Failed to load users:", err); // Handle errors if fetching fails
    }
});
// Add interactivity for the FAQ component
document.querySelectorAll(".question").forEach((q) => {
    q.addEventListener("click", () => {
        // Toggle visibility of the associated answer
        const answer = q.nextElementSibling; // Gets the <p> (answer) right after the <h3> (question)
        if (answer) {
            answer.classList.toggle("visible"); // Toggle the 'visible' class
        }
    });
});
// Get the button element
const backToTopBtn = document.getElementById("backToTopBtn");

// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopBtn.style.display = "block"; // Show the button
    } else {
        backToTopBtn.style.display = "none"; // Hide the button
    }
};

// When the user clicks the button, scroll to the top of the document
backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scroll to the top
    });
});
