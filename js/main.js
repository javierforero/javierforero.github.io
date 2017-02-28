
var nav = document.getElementById('site-nav');
var openIcon =  document.getElementById('open-icon');
var menuTrigger = document.getElementById('menu-trigger');
var closeIcon = document.getElementById('close-icon');

function menuClick() {
  menuTrigger.style.display = "block";
  openIcon.style.display = "none";
  document.getElementById('close-icon').style.display = "block";
  nav.classList.add("overlay");
  closeIcon.classList.add("wrapper");
}

function menuClose() {
  document.getElementById('menu-trigger').style.display = "none";
  openIcon.style.display = "block";
  closeIcon.style.display = "none";
  nav.classList.remove("overlay");
}

window.addEventListener('resize', function() {
  if (window.innerWidth >= 600 ) {
    openIcon.style.display = "none";
    menuTrigger.style = "block";
    closeIcon.style.display = "none";
    nav.classList.remove("overlay");
    closeIcon.classList.remove("wrapper");
  }
  else {
    openIcon.style.display = "block";
    menuTrigger.style = "none";
    menuClose();
  }
});
