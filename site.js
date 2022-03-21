function logoHover(element) {
    element.setAttribute('src', 'Images/Logo_Neon.png');
}
  
function logoUnhover(element) {
    element.setAttribute('src', 'Images/Logo.png');
}

const faders = document.querySelectorAll
('.fadeIn');

const sliders = document.querySelectorAll('.slideIn');

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -215px 0px"
};

const appearOnScroll = new IntersectionObserver
(function(entries,
    appearOnScroll
) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
}, 
appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

sliders.forEach(slider=> {
    appearOnScroll.observe(slider);
});