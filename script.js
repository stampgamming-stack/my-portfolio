// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Reveal on Scroll Animation
const observerOptions = {
    threshold: 0.15, // Trigger when 15% of the element is visible
    rootMargin: "0px 0px -50px 0px" // Trigger slightly before the bottom of the screen
};
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);
// Select all elements we want to animate
const animatedElements = document.querySelectorAll(
    '.section-title, .trekker-title, .text-box, .sop-img, ' +
    '.profile-left, .profile-right, ' +
    '.project-images-left, .project-info-right, ' +
    '.activity-images-left, ' +
    '.cert-item, ' +
    '.thank-you-content h1, .quote-box, .social-links'
);
animatedElements.forEach((el) => {
    el.classList.add('reveal-on-scroll'); // Add the initial hidden state
    observer.observe(el);
});
// Navbar Background Change on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(43, 29, 22, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
    } else {
        navbar.style.background = 'rgba(43, 29, 22, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});
// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});