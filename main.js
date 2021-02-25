const button = document.querySelector(".cv-wrapper img");
const cv = document.querySelector(".cv");
const body = document.querySelector("body");
const exit= document.querySelector(".exit span");

button.addEventListener("click", () =>{
    cv.style.display= "block";
    backdrop.style.display="block";
    body.scrollTo(0,0)
    toggleButton.style.display="none";

});

backdrop.addEventListener("click", () =>{
    cv.style.display="none";
    backdrop.style.display="none";
});


exit.addEventListener("click", () =>{
    cv.style.display="none";
    backdrop.style.display="none";
    toggleButton.style.display="block";
})

