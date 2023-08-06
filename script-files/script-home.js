const container_abou_me = document.querySelector(".container-hero-about-me");
const img_profile_container = document.querySelector(".img-profile-container");

const nameAbout = document.querySelector(".name-about");
const containerAbouMe = document.querySelector(".container-aboutMe-info");
const headBar = document.querySelector(".head-bar");
const headBottom = document.querySelector(".container-bottom-bar");

const containerContactMe = document.querySelector(".container-contact-me");

const contactMe = document.querySelector(".contact-me");
const contactMeBtn = document.querySelector(".contact-me-btn");
const contactMeBottom = document.querySelector(".contact-me-bottom");
const portafolioBtn = document.querySelector(".go-to-profile");
const portafolioBottom = document.querySelector(".portafolio-bottom");
const portafolio = document.querySelector(".portafolio");

const home = document.querySelector(".home");
const homeBottom = document.querySelector(".home-bottom");
const homeArr = [home, homeBottom];


/////////////////////////////////////////////////////////////////////



(function setPicturesOnScreenSize() {

   if(window.screen.width > 1180) {
    container_abou_me.insertAdjacentHTML("afterbegin", `<img class="img-hero-desktop" src="./images/homepage/desktop/image-homepage-hero@2x.jpg" alt="img hero">`);
    img_profile_container.insertAdjacentHTML("beforeend", `<img class="img-profile img-profile-desktop" src="./images/homepage/desktop/image-homepage-profile@2x.jpg" alt="img profile">`);
   } else if(window.screen.width > 650) {
    container_abou_me.insertAdjacentHTML("afterbegin", `<img class="img-hero-tablet" src="./images/homepage/mobile/image-homepage-hero@2x.jpg" alt="img hero">`);
    img_profile_container.insertAdjacentHTML("beforeend", `<img class="img-profile img-profile-tablet" src="./images/homepage/tablet/image-homepage-profile@2x.jpg" alt="img profile">`);
   } else {
    container_abou_me.insertAdjacentHTML("afterbegin", `<img class="img-hero-mobile" src="./images/homepage/mobile/image-homepage-hero@2x.jpg" alt="img hero">`);
    img_profile_container.insertAdjacentHTML("beforeend", `<img class="img-profile img-profile-mobile" src="./images/homepage/mobile/image-homepage-profile@2x.jpg" alt="img profile">`);
   }
})();


window.addEventListener('load', function() {

   window.scroll({
      top: 0,
      behavior: 'smooth'
   });
});


// To check if the element is in the vieport
function isElInViewport(el) {
   const rect = el.getBoundingClientRect();
   const check1 = rect.top > 0 && rect.top < (window.innerHeight || document.documentElement.clientHeight);
   const check2  = rect.bottom > 0 && rect.bottom < (window.innerHeight || document.documentElement.clientHeight);

   return check1 || check2;
};


nameAbout.addEventListener("click", function(e) {
   e.preventDefault();

   containerAbouMe.scrollIntoView({behavior: 'smooth'});
});


nameAbout.addEventListener("touchstart", function(e){
   e.preventDefault();

   nameAbout.classList.add("about-btn-touch");

}, {passive: false});


nameAbout.addEventListener("touchend", function(e){
   
   nameAbout.classList.remove("about-btn-touch");
   containerAbouMe.scrollIntoView({behavior: 'smooth'});

}, {passive: false});



window.addEventListener("scroll", function() {

   if(window.scrollY <= 50 ) {
      if(window.screen.width < 650) container_abou_me.style.marginTop = `calc(120px - ${window.scrollY}px)`;
      else container_abou_me.style.marginTop = `calc(150px - ${window.scrollY}px)`;
      headBar.style.height = `calc(120px - ${window.scrollY}px)`; 
      containerAbouMe.style.scrollMarginTop = `calc(125px - ${window.scrollY}px)`;
   } else {
      if(window.screen.width < 650) container_abou_me.style.marginTop = "70px";
      else container_abou_me.style.marginTop = "100px";
      headBar.style.height = "70px";
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
      
      sectionObserver.observe(containerAbouMe);
      sectionObserver.observe(containerContactMe);
      
      if(!isElInViewport(containerAbouMe)) containerAbouMe.classList.add("section-hidden");
      if(!isElInViewport(containerContactMe)) containerContactMe.classList.add("section-hidden");  
   });

})
   

homeArr.forEach( el => {

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

      window.location.href = "./html-files/contact.html";
   })
})


const arrPortafolio = [portafolio, portafolioBottom, portafolioBtn];
arrPortafolio.forEach( el => {

   el.addEventListener("click", function(e) {
      e.preventDefault();

      window.location.href = "./html-files/portfolio.html";
   })
});




