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
.resume-btn {
    display: inline-block;
    margin-top: 20px;
    padding: 12px 30px;
    border: 1px solid var(--text-primary);
    color: var(--text-primary);
    text-decoration: none;
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 2px;
    transition: all 0.4s ease;
    cursor: pointer;
}

.resume-btn:hover {
    background-color: var(--text-primary);
    color: var(--bg-color); /* Flips colors on hover */
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(255, 255, 255, 0.1);
}