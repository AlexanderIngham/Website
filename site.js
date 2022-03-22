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


//Role Buttons (About Me Page)
function roleswap(element) {
    roleButtons = document.getElementsByClassName("selectedRoleButton");

    for(btn of roleButtons){
        btn.classList.remove("selectedRoleButton");
    }

    switch(element.id){
        case "role-B1":
            document.getElementById("role-Bar").style.transform = "translateY(0)";
            break;
        case "role-B2":
            document.getElementById("role-Bar").style.transform = "translateY(calc(1 * 48px))";
            break;
        case "role-B3":
            document.getElementById("role-Bar").style.transform = "translateY(calc(2 * 48px))";
            break;
        case "role-B4":
            document.getElementById("role-Bar").style.transform = "translateY(calc(3 * 48px))";
            break;
        default:
            document.getElementById("role-Bar").style.transform = "translateY(0)";
            break;
    }
    element.classList.add("selectedRoleButton");
}