document.addEventListener('DOMContentLoaded', () => {
    // Dynamic Highlight
    {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('on');
                }
            })
        }, { threshold: 1 });

        const highlights = document.querySelectorAll('.dynamic-highlight');
        highlights.forEach((el) => observer.observe(el));
    }

    // TWEMOJI
    twemoji.parse(document.body, {
        folder: "svg",
        ext: ".svg"
    });
});