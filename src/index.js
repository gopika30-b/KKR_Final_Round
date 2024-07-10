
document.addEventListener('DOMContentLoaded', function() {
    const servicesSection = document.querySelector('#services');
    const aboutSection = document.querySelector('#aboutPage');
    const workshopSection = document.querySelector('#workshop');
    const shopSection = document.querySelector('#shop');
    const communitySection = document.querySelector('#community');
    const footerSection = document.querySelector('#footer');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.id === 'services') {
                    document.querySelectorAll('#services .title, #services .gif, #services .service').forEach(element => {
                        element.classList.add('slide-in');
                        element.classList.remove('hidden');
                    });
                }
                if (entry.target.id === 'aboutPage') {
                    document.querySelectorAll('#aboutPage .title, #aboutPage .content .image, #aboutPage .content .text').forEach(element => {
                        element.classList.add('slide-in-bottom');
                        element.classList.remove('hidden');
                    });
                }
                if (entry.target.id === 'workshop') {
                    document.querySelectorAll('#workshop .title, #workshop .main .content, #workshop .main .image').forEach(element => {
                        element.classList.add('slide-in');
                        element.classList.remove('hidden');
                    });
                }
                if (entry.target.id === 'shop') {
                    document.querySelectorAll('#shop .head').forEach(element => {
                        element.classList.add('slide-in-left');
                        element.classList.remove('hidden');
                    });
                    document.querySelectorAll('#shop .items').forEach(element => {
                        element.classList.add('slide-in-right');
                        element.classList.remove('hidden');
                    });
                    document.querySelectorAll('#shop .btn').forEach(element => {
                        element.classList.add('slide-in-bottom');
                        element.classList.remove('hidden');
                    });
                }
                if (entry.target.id === 'community') {
                    document.querySelectorAll('#community .title, #community .main .left, #community .main .right').forEach(element => {
                        element.classList.add('slide-in-left');
                        element.classList.remove('hidden');
                    });
                }
                if (entry.target.id === 'footer') {
                    document.querySelectorAll('#footer .connect, #footer .main, #footer .footer').forEach(element => {
                        element.classList.add('slide-in-bottom');
                        element.classList.remove('hidden');
                    });
                }
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('#services .title, #services .gif, #services .service, #aboutPage .title, #aboutPage .content .image, #aboutPage .content .text, #workshop .title, #workshop .main .content, #workshop .main .image, #shop .head, #shop .items, #shop .btn, #community .title, #community .main .left, #community .main .right, #footer .connect, #footer .main, #footer .footer').forEach(element => {
        element.classList.add('hidden');
    });
    observer.observe(servicesSection);
    observer.observe(aboutSection);
    observer.observe(workshopSection);
    observer.observe(shopSection);
    observer.observe(communitySection);
    observer.observe(footerSection);
});
