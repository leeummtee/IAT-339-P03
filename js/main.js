// nav reference from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_sidenav --
function openNav() {
  document.getElementById("mySidenav").style.width = "25rem";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

//initializing the animation library
AOS.init();

//nav for styleguide. I will have one navbar at the top for the main navigation, and another one as a template within the page. This is why I am repeating the code but with a different ID - my code won't be valid if I have a duplicate ID
function openNavStyleGuide() {
  document.getElementById("mySidenavStyleGuide").style.width = "25rem";
}

function closeNavStyleGuide() {
  document.getElementById("mySidenavStyleGuide").style.width = "0";
}

//changing image sources for certain images in the poster project page when in mobile view
window.addEventListener('resize', resizePoster);
function resizePoster() {
  if (document.getElementById("poster") && window.innerWidth < 600) {
    document.getElementById("poster-sketches").src = "compressed-images/poster-sketches-mobile.png";
    document.getElementById("poster-outcome").src = "compressed-images/poster-outcome-mobile.png";
  } else if (document.getElementById("poster") && window.innerWidth >= 600) {
    document.getElementById("poster-sketches").src = "compressed-images/poster-sketches-desktop.png";
    document.getElementById("poster-outcome").src = "compressed-images/poster-outcome.png";
  }
}

//changing image sources for certain images in the kinetic project page when in mobile view
window.addEventListener('resize', resizeKinetic);
function resizeKinetic() {
  if (document.getElementById("kinetic") && window.innerWidth < 600) {
    document.getElementById("storyboard-sketches").src = "compressed-images/mobile-storyboard.png";
    document.getElementById("after-effects").src = "compressed-images/after-effects-mobile.png";

  } else if (document.getElementById("kinetic") && window.innerWidth >= 600) {
    document.getElementById("storyboard-sketches").src = "compressed-images/kinetic-storyboard.png";
    document.getElementById("after-effects").src = "compressed-images/after-effects.png";
  }
}
