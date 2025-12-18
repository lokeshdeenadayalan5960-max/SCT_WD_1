// Navbar scroll effect
window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Smooth scroll button
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Quiz logic
function checkAnswer(answer) {
    const result = document.getElementById("result");
    if (answer === "correct") {
        result.textContent = "✅ Correct! Plastic takes over 500 years.";
        result.style.color = "green";
    } else {
        result.textContent = "❌ Wrong answer. Try again!";
        result.style.color = "red";
    }
}
