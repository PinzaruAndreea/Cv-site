const mobileNav = document.querySelector(".mobile-nav");
const toggleButton = document.querySelector(".toggle-button");
const backdrop = document.querySelector(".backdrop");


toggleButton.addEventListener("click", function() {
    mobileNav.classList.add("open");
    backdrop.style.display = "block";
  });

backdrop.addEventListener("click", () =>{
    mobileNav.classList.remove("open");
    backdrop.style.display="none";
});






