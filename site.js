function logoHover(element) {
    element.setAttribute('src', 'Images/Logo_Neon.png');
}
  
function logoUnhover(element) {
    element.setAttribute('src', 'Images/Logo.png');
}

//Start css animations when the user's mouse enters the page
$("#body-home").one("mouseover", function() {
    document.getElementById("text").style.opacity = "1";
    $("#text").addClass('textPermaHover');

    document.getElementById("cone").style.opacity = "1";
    $("#cone").addClass('conePermaHover');

    $("#smallDot").addClass('smallDotPermaHover');
    $("#bigDot").addClass('bigDotPermaHover');
});