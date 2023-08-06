const home = document.querySelector(".home");
const contactMe = document.querySelector(".contact-me");
const homeBottom = document.querySelector(".home-bottom");
const contactMeBottom = document.querySelector(".contact-me-bottom");
const contactMeBtn = document.querySelector(".contact-me-btn");
const portafolioBottom = document.querySelector(".portafolio-bottom");
const portafolio = document.querySelector(".portafolio");

const containerContactMe = document.querySelector(".container-contact-me");

const viewWebsite = document.querySelector(".go-to-profile");

const images = document.querySelectorAll(".img-general");
const containerSwitchProject = document.querySelector(".container-switch-project");
const innerContainer = document.querySelector(".inner-container");
const description = document.querySelector(".description");
const textaArr = [innerContainer, description];




const headBar2 = document.querySelector(".head-bar");
const containerInfo = document.querySelector(".img-profile-container");
const headBottom = document.querySelector(".container-bottom-bar");


////////////////////////////////////////////////////////////////////////////////


window.addEventListener('load', function() {

   window.scroll({
      top: 0,
      behavior: 'smooth'
   });
});



function isElInViewport(el) {
   const rect = el.getBoundingClientRect();
   const check1 = rect.top > 0 && rect.top < (window.innerHeight || document.documentElement.clientHeight);
   const check2  = rect.bottom > 0 && rect.bottom < (window.innerHeight || document.documentElement.clientHeight);

   return check1 || check2;
};



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

      images.forEach( el => {
   
         sectionObserver.observe(el);
         if(!isElInViewport(el)) el.classList.add("section-hidden");
      });
      
      sectionObserver.observe(containerContactMe);
      if(!isElInViewport(containerContactMe)) containerContactMe.classList.add("section-hidden");

      sectionObserver.observe(innerContainer);
      if(!isElInViewport(innerContainer)) innerContainer.classList.add("section-hidden");

      sectionObserver.observe(containerSwitchProject);
      if(!isElInViewport(containerSwitchProject)) containerSwitchProject.classList.add("section-hidden");
   });

});




// Perche inserendola dentro alla funzione qui sopra causa problemi , peso sia sempre dovuto al bouncing delle foto
if(!isElInViewport(description)) description.classList.add("section-hidden");
if(isElInViewport(description)) description.classList.remove("section-hidden");

window.addEventListener("scroll", function() {

   if(!isElInViewport(description)) description.classList.add("section-hidden");
   if(isElInViewport(description)) description.classList.remove("section-hidden");

});





window.addEventListener("scroll", function() {

   if(window.scrollY <= 50 ) {
      headBar2.style.height = `calc(120px - ${window.scrollY}px)`;
      if(window.screen.width < 650) containerInfo.style.marginTop = `calc(120px - ${window.scrollY}px)`;
      else containerInfo.style.marginTop = `calc(150px - ${window.scrollY}px)`;
   } else {
      headBar2.style.height = "70px";
      if(window.screen.width < 650) containerInfo.style.marginTop = "70px";
      else containerInfo.style.marginTop = "100px";
   }


   const stikyNav = function(entries) {
   
      const [entry] = entries;

      if(entry.isIntersecting && window.scrollY !== 0) {
         headBar2.style.display = "none";
      } 
      else {
         headBar2.style.display = "block";
         headBar2.style.display = "flex";
      }
   }
   
   
    const headerObserver = new IntersectionObserver(stikyNav, {
      root: null,
      thresshold: 0,
      // rootMargin: "40px"
    });
   
   
   
   headerObserver.observe(headBottom);
});




const arrContact = [contactMe, contactMeBottom, contactMeBtn];
arrContact.forEach( el => {

   el.addEventListener("click", function(e) {
      e.preventDefault();

      window.location.href = "./contact.html";
   })
});


const arrPortafolio = [portafolio, portafolioBottom];
arrPortafolio.forEach( el => {

   el.addEventListener("click", function(e) {
      e.preventDefault();

      window.location.href = "./portfolio.html";
   })
})


const arrHome = [home, homeBottom];
arrHome.forEach( el => {

   el.addEventListener("click", function(e) {
      e.preventDefault();

      window.location.href = "./../index.html";
   })
});

viewWebsite.addEventListener("click", function(e) {
   e.preventDefault();
        
   const newWindow = window.open();
   newWindow.opener = null;
   newWindow.location.href = "https://francoup.com/";
});


viewWebsite.addEventListener("touchstart", function(e) {
   e.preventDefault();
        
   viewWebsite.classList.add("go-to-profile-hover-touch");
}, {passive: false});


viewWebsite.addEventListener("touchend", function(e) {
   e.preventDefault();
        
   viewWebsite.classList.remove("go-to-profile-hover-touch");

   const newWindow = window.open();
   newWindow.opener = null;
   newWindow.location.href = "https://francoup.com/";
   
}, {passive: true});