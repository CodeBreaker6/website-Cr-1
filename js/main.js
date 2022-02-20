
document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', function (e) {
        e.preventDefault();

        const element = document.querySelector(e.target.getAttribute('href'));
        const offset = 68;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition - offset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth',
        });
    });
});
