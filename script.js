document.addEventListener('DOMContentLoaded', () => {

    // Accordion Logic (Event Delegation)
    const accordionContainer = document.querySelector('.project-accordion');

    if (accordionContainer) {
        accordionContainer.addEventListener('click', (e) => {
            // Find the closest project-summary that was clicked
            const summary = e.target.closest('.project-summary');

            if (summary) {
                const row = summary.parentElement;

                // Optional: Close others (Strict Accordion)
                /*
                document.querySelectorAll('.project-row').forEach(r => {
                    if (r !== row && r.classList.contains('open')) {
                        r.classList.remove('open');
                    }
                });
                */

                row.classList.toggle('open');
            }
        });
    }

    // Active Nav Highlight & Intersection Observer
    const observerOptions = {
        threshold: 0.3,
        rootMargin: "-20% 0px -50% 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                document.querySelectorAll('.nav-item').forEach(nav => {
                    nav.classList.remove('active');
                    if (nav.getAttribute('href') === `#${id}`) {
                        nav.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    document.querySelectorAll('.content-section').forEach(section => {
        observer.observe(section);
    });
});
