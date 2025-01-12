document.addEventListener("DOMContentLoaded", () => {
    const elementsToAnimate = document.querySelectorAll(
        ".main__second-window-text-block, .main__second-window-titles"
    );

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.3 }
    );

    elementsToAnimate.forEach((el) => observer.observe(el));
});