// Add a sticky navigation to the navigation bar
const navBar = document.querySelector(".nav-bar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navBar.classList.add("sticky");
  } else {
    navBar.classList.remove("sticky");
  }
});