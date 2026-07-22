console.log("Portfolio Loaded Successfully");
/*================ BACK TO TOP ================*/

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        backToTop.style.display = "block";

    }else{

        backToTop.style.display = "none";

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
/*================ ACTIVE NAVIGATION ================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});
/*================ IMAGE GALLERY =================*/

const modal = document.getElementById("imageModal");

const modalImg = document.getElementById("modalImage");

const closeBtn = document.querySelector(".close-modal");

const prevBtn = document.querySelector(".prev");

const nextBtn = document.querySelector(".next");

const images = [...document.querySelectorAll(".project-card img")];

let currentIndex = 0;

images.forEach((img,index)=>{

    img.addEventListener("click",()=>{

        currentIndex=index;

        showImage();

        modal.style.display="flex";

    });

});

function showImage(){

    modalImg.src=images[currentIndex].src;

}

nextBtn.onclick=()=>{

    currentIndex++;

    if(currentIndex>=images.length){

        currentIndex=0;

    }

    showImage();

}

prevBtn.onclick=()=>{

    currentIndex--;

    if(currentIndex<0){

        currentIndex=images.length-1;

    }

    showImage();

}

closeBtn.onclick=()=>{

    modal.style.display="none";

}

modal.onclick=(e)=>{

    if(e.target===modal){

        modal.style.display="none";

    }

}
document.addEventListener("keydown",(e)=>{

    if(modal.style.display==="flex"){

        if(e.key==="ArrowRight"){

            nextBtn.click();

        }

        if(e.key==="ArrowLeft"){

            prevBtn.click();

        }

        if(e.key==="Escape"){

            modal.style.display="none";

        }

    }

});
/*================ MOBILE MENU ================*/

/*================ MOBILE MENU ================*/

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-links");
const menuIcon = document.querySelector(".menu-toggle i");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    menuIcon.classList.toggle("fa-bars");
    menuIcon.classList.toggle("fa-times");

});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");

    });

});
/*================ TYPING EFFECT ================*/

const roles = [

    "Python Developer",

    "Linux Administrator",

    "Data Analyst"

];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

    const current = roles[roleIndex];

    if(!deleting){

        typing.textContent = current.substring(0,charIndex++);

        if(charIndex > current.length){

            deleting = true;

            setTimeout(typeEffect,1200);

            return;

        }

    }else{

        typing.textContent = current.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            roleIndex = (roleIndex+1)%roles.length;

        }

    }

    setTimeout(typeEffect,deleting?50:100);

}

typeEffect();
/*================ SCROLL REVEAL ================*/

const reveals = document.querySelectorAll("section");

function revealSection(){

    const windowHeight = window.innerHeight;

    reveals.forEach(section=>{

        const top = section.getBoundingClientRect().top;

        if(top < windowHeight - 100){

            section.classList.add("active");

        }

    });

}

reveals.forEach(section=>{

    section.classList.add("reveal");

});

window.addEventListener("scroll",revealSection);

revealSection();
