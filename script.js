document.getElementById("alertButton").addEventListener("click", function() {
    alert("Surprise! You clicked the button.");
});

document.getElementById("modeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

// Dark Mode Styles
const style = document.createElement('style');
style.innerHTML = `
    .dark-mode {
        background-color: #121212;
        color: white;
    }
    .dark-mode .card {
        background-color: #333;
        color: white;
    }
`;
document.head.appendChild(style);