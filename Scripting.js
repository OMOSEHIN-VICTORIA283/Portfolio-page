// NAVBAR SCROLL EFFECT
// Changes navbar color when user scrolls down
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// SMOOTH SCROLLING FOR NAVIGATION LINKS
// Makes navigation links scroll smoothly to sections
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// FADE IN ANIMATION FOR SECTIONS
// Makes sections fade in when they come into view
function handleScrollAnimations() {
  const elements = document.querySelectorAll(".fade-in");

  elements.forEach(function (element) {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add("visible");
    }
  });
}

// Check for animations when page loads and when user scrolls
window.addEventListener("scroll", handleScrollAnimations);
window.addEventListener("load", handleScrollAnimations);

// MOBILE MENU TOGGLE (for future enhancement)
// This can be expanded to show/hide mobile menu
document.querySelector(".menu-toggle").addEventListener("click", function () {
  console.log("Mobile menu clicked - add mobile menu functionality here");
});
