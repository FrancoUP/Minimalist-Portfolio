const img_profile_bookmark = document.querySelector(".bookmark");
const img_profile_fylo = document.querySelector(".fylo");
const img_profile_insure = document.querySelector(".insure");
const img_profile_manage = document.querySelector(".manage");
const projects = document.querySelectorAll(".container-aboutMe-info");

const containerContactMe = document.querySelector(".container-contact-me");

const home = document.querySelector(".home");
const homeBottom = document.querySelector(".home-bottom");
const contactMe = document.querySelector(".contact-me");
const contactMeBottom = document.querySelector(".contact-me-bottom");
const contactMeBtn = document.querySelector(".contact-me-btn");

const portafolioBottom = document.querySelector(".portafolio-bottom");
const portafolio = document.querySelector(".portafolio");
const portafolioArr = [portafolio, portafolioBottom];

const arrViewProjects = document.querySelectorAll(".go-to-profile");

const headBar = document.querySelector(".head-bar");
const headBottom = document.querySelector(".container-bottom-bar");


/////////////////////////////////////////////////////////////////////////////////////////


(function setPicturesOnScreenSize() {

   if(window.screen.width > 1180) {
    img_profile_manage.insertAdjacentHTML("afterbegin", `<div class="img-profile-container"><img class="img-profile-desktop" src="./../images/portfolio/desktop/image-portfolio-manage@2x.jpg"></div>`);
    img_profile_bookmark.insertAdjacentHTML("beforeend", `<div class="img-profile-container"><img class="img-profile-desktop" src="./../images/portfolio/desktop/image-portfolio-bookmark@2x.jpg"></div>`);
    img_profile_insure.insertAdjacentHTML("afterbegin", `<div class="img-profile-container"><img class="img-profile-desktop" src="./../images/portfolio/desktop/image-portfolio-insure@2x.jpg"></div>`);
    img_profile_fylo.insertAdjacentHTML("beforeend", `<div class="img-profile-container"><img class="img-profile-desktop" src="./../images/portfolio/desktop/image-portfolio-fylo@2x.jpg"></div>`);
   } else if(window.screen.width > 650) {
    img_profile_manage.insertAdjacentHTML("afterbegin", `<div class="img-profile-container"><img class="img-profile-tablet" src="./../images/portfolio/tablet/image-portfolio-manage@2x.jpg"></div>`);
    img_profile_bookmark.insertAdjacentHTML("beforeend", `<div class="img-profile-container"><img class="img-profile-tablet" src="./../images/portfolio/tablet/image-portfolio-bookmark@2x.jpg"></div>`);
    img_profile_insure.insertAdjacentHTML("afterbegin", `<div class="img-profile-container"><img class="img-profile-tablet" src="./../images/portfolio/tablet/image-portfolio-insure@2x.jpg"></div>`);
    img_profile_fylo.insertAdjacentHTML("beforeend", `<div class="img-profile-container"><img class="img-profile-tablet" src="./../images/portfolio/tablet/image-portfolio-fylo@2x.jpg"></div>`);
   } else {
    img_profile_manage.insertAdjacentHTML("afterbegin", `<div class="img-profile-container"><img class="img-profile-mobile" src="./../images/portfolio/mobile/image-portfolio-manage@2x.jpg"></div>`);
    img_profile_bookmark.insertAdjacentHTML("afterbegin", `<div class="img-profile-container"><img class="img-profile-mobile" src="./../images/portfolio/mobile/image-portfolio-bookmark@2x.jpg"></div>`);
    img_profile_insure.insertAdjacentHTML("afterbegin", `<div class="img-profile-container"><img class="img-profile-mobile" src="./../images/portfolio/mobile/image-portfolio-insure@2x.jpg"></div>`);
    img_profile_fylo.insertAdjacentHTML("afterbegin", `<div class="img-profile-container"><img class="img-profile-mobile" src="./../images/portfolio/mobile/image-portfolio-fylo@2x.jpg"></div>`);
   }
})();



window.addEventListener('load', function() {

   window.scroll({
      top: 0,
      behavior: 'smooth'
   });
});


// To check if the element is inside the viewport
function isElInViewport(el) {
   const rect = el.getBoundingClientRect();
   const check1 = rect.top > 0 && rect.top < (window.innerHeight || document.documentElement.clientHeight);
   const check2  = rect.bottom > 0 && rect.bottom < (window.innerHeight || document.documentElement.clientHeight);

   return check1 || check2;
};


// To appear and disappera head bar
window.addEventListener("scroll", function() {

   if(window.scrollY <= 50 ) {
      headBar.style.height = `calc(120px - ${window.scrollY}px)`;
      if(window.screen.width < 650) img_profile_manage.style.marginTop = `calc(120px - ${window.scrollY}px)`;
      else img_profile_manage.style.marginTop = `calc(150px - ${window.scrollY}px)`;
   } else {
      headBar.style.height = "70px";
      if(window.screen.width < 650) img_profile_manage.style.marginTop = "70px";
      else img_profile_manage.style.marginTop = "100px"
   }


   const stikyNav = function(entries) {
   
      const [entry] = entries;

      if(entry.isIntersecting && window.scrollY !== 0) {
         headBar.style.display = "none";
      } 
      else {
         headBar.style.display = "block";
         headBar.style.display = "flex";
      }
   }
   
   
    const headerObserver = new IntersectionObserver(stikyNav, {
      root: null,
      thresshold: 0,
      // rootMargin: "40px"
    });
   
   
   
   headerObserver.observe(headBottom);
});


// Smoth Revealing of elements on scroll
["load", "scroll"].forEach(el => {


   window.addEventListener(el, function(e) {
      e.preventDefault();

      const revealSection = function(entries,observer) {

         const [entry] = entries;
      
         if(!entry.isIntersecting) return;
      
         entry.target.classList.remove("section-hidden");
      
         observer.unobserve(entry.target);
      };
      
      const sectionObserver = new IntersectionObserver(revealSection, {
         root: null,
         threshold: 0
      });
      
      projects.forEach( el => {
   
         sectionObserver.observe(el);
         if(!isElInViewport(el)) el.classList.add("section-hidden");
      });
      
      sectionObserver.observe(containerContactMe);
      if(!isElInViewport(containerContactMe)) containerContactMe.classList.add("section-hidden");  
   });

})


portafolioArr.forEach( el => {

   el.addEventListener("click", function(e) {
    e.preventDefault();
 
    window.scroll({
       top: 0,
       behavior: 'smooth'
    });
 
   })
});


const arrContact = [contactMe, contactMeBottom, contactMeBtn];
arrContact.forEach( el => {

   el.addEventListener("click", function(e) {
      e.preventDefault();

      window.location.href = "./contact.html";
   })
});


const arrHome = [home, homeBottom];
arrHome.forEach( el => {

   el.addEventListener("click", function(e) {
      e.preventDefault();

      window.location.href = "./../index.html";
   })
});



[...arrViewProjects].forEach( el => {

   el.addEventListener("click", function(e) {

        if(el === arrViewProjects[0]) window.location.href = "./manage.html";
        if(el === arrViewProjects[1]) window.location.href = "./bookmark.html";
        if(el === arrViewProjects[2]) window.location.href = "./insure.html";
        if(el === arrViewProjects[3]) window.location.href = "./fylo.html";
   })
});