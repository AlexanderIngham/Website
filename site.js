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

//Handle Side Nav Hover Effect
// var target = document.querySelector("#Home-Nav");
// target.addEventListener("mouseover", mOver(this), false);
// target.addEventListener("mouseout", mOut(this), false);
// function mOver() {
//    target.setAttribute("style", "background-color:blue;")
// }
// function mOut() {  
//    target.setAttribute("style", "background-color:green;")
// }

//Handle Side Nav Location Indication On Scroll
function sideNavSwap () {
    var homeNavElement = document.querySelector("#Home-Nav");
    var aboutNavElement = document.querySelector("#About-Nav");
    var projectsNavElement = document.querySelector("#Projects-Nav");
    if(this.scrollY <= 500){
        homeNavElement.classList.add("sidebar-nav-item-current");
        aboutNavElement.classList.remove("sidebar-nav-item-current");
        projectsNavElement.classList.remove("sidebar-nav-item-current");
    } else if(this.scrollY > 500){
        homeNavElement.classList.remove("sidebar-nav-item-current");
        aboutNavElement.classList.add("sidebar-nav-item-current");
        projectsNavElement.classList.remove("sidebar-nav-item-current");
    } else if(this.scrollY > 800) {
        homeNavElement.classList.remove("sidebar-nav-item-current");
        aboutNavElement.classList.remove("sidebar-nav-item-current");
        projectsNavElement.classList.add("sidebar-nav-item-current");
    }
}
window.addEventListener("scroll", sideNavSwap , false);


//Role Buttons (About Me Page)
function roleswap(element) {

    roleButtons = document.getElementsByClassName("selectedRoleButton");
    for(btn of roleButtons){
        btn.classList.remove("selectedRoleButton");
    }

    jobDSCs = document.getElementsByClassName("jobDsc");
    for(job of jobDSCs){
        job.style.display = "none";
    }

    switch(element.id){
        case "role-B1":
            document.getElementById("job-1").style.display = "block";
            document.getElementById("role-Bar").style.transform = "translateY(0)";
            break;
        case "role-B2":
            document.getElementById("job-2").style.display = "block";
            document.getElementById("role-Bar").style.transform = "translateY(calc(1 * 48px))";
            break;
        case "role-B3":
            document.getElementById("job-3").style.display = "block";
            document.getElementById("role-Bar").style.transform = "translateY(calc(2 * 48px))";
            break;
        case "role-B4":
            document.getElementById("job-4").style.display = "block";
            document.getElementById("role-Bar").style.transform = "translateY(calc(3 * 48px))";
            break;
        case "role-B5":
            document.getElementById("job-5").style.display = "block";
            document.getElementById("role-Bar").style.transform = "translateY(calc(4 * 48px))";
            break;
        default:
            document.getElementById("job-1").style.display = "block";
            document.getElementById("role-Bar").style.transform = "translateY(0)";
            break;
    }
    element.classList.add("selectedRoleButton");
}