console.log("script connected");


function SelectHamIcon(x) {
  x.classList.toggle("change");
}
/* Set the width of the side navigation to 250px */
function openNav() {
  /* Sjekker width til viewport og justerer mysidenav width */
  let sidebarwidth = "";
  if (window.innerHeight <= 450) {
    console.log(window.innerHeight);
    sidebarwidth = "100%";
  } else {
    console.log(window.innerHeight);
    sidebarwidth = "250px";
  }


  if (document.getElementById("mySidenav").style.width == sidebarwidth) {
    console.log("already open, closing");
    closeNav();
  } else {
    document.getElementById("mySidenav").style.width = sidebarwidth;
    document.getElementById("Ham-icon-id").classList.add("change");
  }
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("Ham-icon-id").classList.remove("change");

}
window.addEventListener("click", (d) => {
  if (!d.target.matches('.Ham-icon') && !d.target.matches('.Cookie-menu')) {
    var nav_is_showing = document.getElementById("mySidenav");
    if (nav_is_showing.style.width == "250px") {
      closeNav();
    }
  }
})