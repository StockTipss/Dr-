// script.js

// Open Telegram in same tab
const joinButton = document.querySelector(".join-btn");

joinButton.addEventListener("click", function () {
    // Optional analytics
    console.log("Join Telegram Clicked");
});

// Smooth page load
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// Simple fade-in animation
document.body.style.opacity = "0";
document.body.style.transition = "opacity .8s ease";

// Disable right-click
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

// Disable common inspect shortcuts
document.addEventListener("keydown", function (e) {

    if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key.toUpperCase())) ||
        (e.ctrlKey && e.key.toUpperCase() === "U")
    ) {
        e.preventDefault();
    }

});

// Button glow effect
setInterval(() => {
    joinButton.classList.toggle("active");
}, 1200);
