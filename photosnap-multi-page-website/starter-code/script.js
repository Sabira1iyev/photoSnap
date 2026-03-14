const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close");
const menuSections = document.querySelector(".menu-sections");
const photoSnap = document.querySelector(".mobile-photosnap");
const stories = document.querySelector(".stories");
const features = document.querySelector(".features");
const home = document.querySelector(".home");

menuBtn.addEventListener("click", () => {
    menuSections.classList.add("active");
    menuBtn.style.display = "none";
    closeBtn.classList.add("active")
    closeBtn.style.display = "block";
    photoSnap.style.backgroundColor = "rgba(0,0,0,0.5)";
})

closeBtn.addEventListener("click", () => {
    menuSections.classList.remove("active");
    closeBtn.classList.remove("active");
    closeBtn.style.display = "none";
    menuBtn.style.display = "block";
        photoSnap.style.backgroundColor = "";

})


home.addEventListener("click", () =>{
    window.location.href = "index.html";
})
 