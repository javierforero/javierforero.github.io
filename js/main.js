
var nav = document.getElementById('site-nav');
var openIcon =  document.getElementById('open-icon');
var menuTrigger = document.getElementById('menu-trigger');
var closeIcon = document.getElementById('close-icon');
var mobileMenu = document.getElementById('mobile-menu');
function menuClick() {

  openIcon.style.display = "none";
  closeIcon.style.display = "block";
  mobileMenu.style.display = "block";
  mobileMenu.classList.add('overlay');
}

function menuClose() {
  openIcon.style.display = "block";
  closeIcon.style.display = "none";
  mobileMenu.style.display = "none";
}

window.addEventListener('resize', function() {
  if (window.innerWidth > 600 ) {
    openIcon.style.display = "none";
    closeIcon.style.display = "none";
    mobileMenu.classList.remove('overlay');
    mobileMenu.style.display = "none";
  }
  else {
    openIcon.style.display = "block";
    mobileMenu.style.display = "none";
    menuClose();
  }
});
