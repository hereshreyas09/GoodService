console.log("GSF Website Loaded Successfully");

/* NAVBAR ACTIVE LINK */

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

link.addEventListener("click", () => {

links.forEach(item => {
item.classList.remove("active");
});

link.classList.add("active");

});

});

/* SCROLL ANIMATION */

window.addEventListener("scroll", () => {

const navbar = document.querySelector(".navbar");

if(window.scrollY > 50){

navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.15)";

}else{

navbar.style.boxShadow = "none";

}

});