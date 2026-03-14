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
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.about-tab-btn');
    const panes = document.querySelectorAll('.about-pane');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.getAttribute('data-target');

            // 1. Deactivate all buttons and panes
            tabs.forEach(btn => btn.classList.remove('active'));
            panes.forEach(pane => pane.classList.remove('active'));

            // 2. Activate the clicked button
            tab.classList.add('active');

            // 3. Show the corresponding content with a slight delay for smoothness
            const activePane = document.getElementById(targetId);
            activePane.classList.add('active');
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('header, section, footer');

    // 1. Smooth Scrolling Interaction
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 70, // Adjust for nav height
                behavior: 'smooth'
            });
        });
    });

    s