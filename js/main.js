// reference from https: stackoverflow.com/questions/38673081/how-to-make-the-content-appear-on-scrolling-down-the-webpage/38673529

// <script src = "https://unpkg.com/aos@next/dist/aos.js" > < /script>
// AOS.init();

// nav reference from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_sidenav --
function openNav() {
  document.getElementById("mySidenav").style.width = "25rem";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


//changing image sources for certain images when in mobile view
window.addEventListener('resize', resize);

function resize() {
  if (window.innerWidth < 600) {
    // console.log('window.innerWidth < 700');
    document.getElementById("poster-sketches").src = "images/poster-sketches-mobile.png";
    document.getElementById("poster-outcome").src = "images/poster-outcome-mobile.png";
  } else {
    document.getElementById("poster-sketches").src = "images/poster-sketches-desktop.png";
    document.getElementById("poster-outcome").src = "images/poster-outcome.png";

    // document.getElementById("storyboard-sketches").src = "images/storyboard-sketches.png";
  }
}

window.addEventListener('resize2', resize);

function resize2() {
  if (window.innerWidth < 600) {
    // console.log('window.innerWidth < 700');
    document.getElementById("storyboard-sketches").src = "images/mobile-storyboard.png";
  } else {
    document.getElementById("storyboard-sketches").src = "images/kinetic-storyboard.png";

    // document.getElementById("storyboard-sketches").src = "images/storyboard-sketches.png";
  }
}
