document.addEventListener('DOMContentLoaded', function() {
    const footerSection = document.querySelector('#footer');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelectorAll('#footer .connect, #footer .main, #footer .footer').forEach(element => {
                    element.classList.add('slide-in-bottom');
                    element.classList.remove('hidden');
                });
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.1 }); 
    document.querySelectorAll('#footer .connect, #footer .main, #footer .footer').forEach(element => {
        element.classList.add('hidden');
    });
    observer.observe(footerSection);
});
