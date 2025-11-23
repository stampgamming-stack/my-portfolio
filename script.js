// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar Background Change on Scroll (เปลี่ยนจากการตั้งค่า Style โดยตรง เป็นการ Add/Remove Class)
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        // เพิ่มคลาส navbar-scrolled (CSS จะกำหนดสีเข้ม)
        navbar.classList.add('navbar-scrolled');
    } else {
        // ลบคลาสเมื่ออยู่บนสุด
        navbar.classList.remove('navbar-scrolled');
    }
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Scroll Animation Observer (ปรับปรุงให้ทำงานกับองค์ประกอบย่อยได้ด้วย)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // เมื่อองค์ประกอบปรากฏในหน้าจอ ให้เพิ่มคลาส 'show'
            entry.target.classList.add('show');

            // ปิดการสังเกตเมื่อแสดงแล้ว เพื่อให้แอนิเมชันทำงานครั้งเดียว
            observer.unobserve(entry.target);
        }
    });
}, {
    // กำหนดให้แอนิเมชันเริ่มทำงานเมื่อเห็นองค์ประกอบนั้น 10%
    threshold: 0.1
});

// 1. สังเกต <section> ทั้งหมด
const hiddenElements = document.querySelectorAll('.full-screen-section.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// 2. สังเกตองค์ประกอบย่อยอื่นๆ ที่มีคลาส 'hidden' เพื่อให้มี Staggered Effect
const childElementsToObserve = document.querySelectorAll('.home-content.hidden, .scroll-indicator.hidden, .sop-image-wrapper.hidden, .sop-text-wrapper.hidden, .profile-left.hidden, .profile-right.hidden, .project-images-left.hidden, .project-info-right.hidden, .activity-images-left.hidden, .cert-item.hidden');
childElementsToObserve.forEach((el) => observer.observe(el));