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

    // Text Wave
    {
        document.querySelectorAll('.text-wave').forEach(el => {
            const text = el.textContent;
            el.textContent = '';

            text.split('').forEach((ch, idx) => {
                const span = document.createElement('span');
                span.textContent = ch;
                span.style.setProperty('--i', idx);
                el.appendChild(span);
            });
        });
    }
});