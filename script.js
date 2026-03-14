const toolCards = document.querySelectorAll('.tool-card');

const fadeUpOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

toolCards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "all 0.6s ease-out";
    fadeUpOnScroll.observe(card);
});
document.addEventListener('DOMContentLoaded', () => {
    
    // --- TYPEWRITER EFFECT ---
    const nameText = "GOPIKA";
    const logoElement = document.getElementById("type-logo");
    let i = 0;

    function typeWriter() {
        if (logoElement && i < nameText.length) {
            // substring(0, i + 1) creates the "typing" look
            logoElement.innerHTML = nameText.substring(0, i + 1) + '<span>.</span>';
            i++;
            setTimeout(typeWriter, 150); // Speed in milliseconds
        }
    }

    typeWriter();

    // --- REVEAL ON SCROLL ---
    // This makes sections slide up and fade in as you scroll
    const observerOptions = {
        threshold: 0.15 // Section must be 15% visible to trigger
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, observerOptions);

    // Apply to all major sections
    const targetSections = document.querySelectorAll('section, header, .tech-card');
    targetSections.forEach(section => {
        section.classList.add('reveal-on-scroll');
        observer.observe(section);
    });
});
/* script.js */
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Typewriter Effect
    const nameText = "GOPIKA";
    const logo = document.getElementById("type-logo");
    let i = 0;

    if (logo) {
        function type() {
            if (i < nameText.length) {
                logo.innerHTML = nameText.substring(0, i + 1) + '<span>.</span>';
                i++;
                setTimeout(type, 150);
            }
        }
        type();
    }

    // 2. Scroll Reveal Logic
    const revealElements = document.querySelectorAll('section');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));
});