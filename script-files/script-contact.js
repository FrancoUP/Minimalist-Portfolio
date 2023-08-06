const btnSend = document.querySelector(".btn-send");
const nameInput = document.querySelector(".name");
const email = document.querySelector(".email");
const message = document.querySelector(".input-message");

const choicesContainer = document.querySelector(".choices-container");
const imgHamburgerMenu = document.querySelector(".img-hamburger-menu");


const home = document.querySelector(".home");
const homeBottom = document.querySelector(".home-bottom");
const portafolioBottom = document.querySelector(".portafolio-bottom");
const portafolio = document.querySelector(".portafolio");


const gitHub = document.querySelectorAll(".guitHub");
const twitter = document.querySelectorAll(".twitter");
const linkedin = document.querySelectorAll(".linkedin");


const gitHubBox = document.querySelectorAll(".guitHub-box");
const gitHubPath = document.querySelector(".guitHub-path");
const gitHubPathTop = document.querySelector(".guitHub-path-top");
const twitterBox = document.querySelectorAll(".twitter-box");
const twitterPath = document.querySelector(".twitter-path");
const twitterPathTop = document.querySelector(".twitter-path-top");
const linkedinBox = document.querySelectorAll(".linkedin-box");
const linkedinPath = document.querySelector(".linkedin-path");
const linkedinPathTop = document.querySelector(".linkedin-path-top");

const infoContainer = document.querySelector(".Info-container");
const headBar = document.querySelector(".head-bar");
const headBottom = document.querySelector(".container-bottom-bar");

const contactMe = document.querySelector(".contact-me");
const contactMeBottom = document.querySelector(".contact-me-bottom");
const contactArr = [contactMe, contactMeBottom];

/////////////////////////////////////////////////////////// 



window.addEventListener('load', function() {

   window.scroll({
      top: 0,
      behavior: 'smooth'
   });
});


document.body.addEventListener("click", function(e) {
   e.preventDefault();
 
   if(e.target !== imgHamburgerMenu) {
     choicesContainer.classList.remove("show");
   }
 });
 



function mailValidator(mail) {

   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) { return true };
 
   return (false)
 }


function checkField() {
   if(nameInput.value === "") {
      nameInput.value = "This field is required";
      nameInput.classList.add("btn-send-error");
   }

   if(!mailValidator(email.value)) {
      email.value = "Please use a valid email address";
      email.classList.add("btn-send-error");
   }

   if(message.value === "") {
      message.value = "This field is required";
      message.classList.add("btn-send-error");
   }
};





window.addEventListener("scroll", function() {

   if(window.scrollY <= 50 ) {
      headBar.style.height = `calc(120px - ${window.scrollY}px)`;
      if(window.screen.width < 650) infoContainer.style.marginTop = `calc(120px - ${window.scrollY}px)`;
      else infoContainer.style.marginTop = `calc(150px - ${window.scrollY}px)`;
   } else {
      headBar.style.height = "70px";
      if(window.screen.width < 650) infoContainer.style.marginTop = "70px";
      else infoContainer.style.marginTop = "100px";
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





contactArr.forEach( el => {

   el.addEventListener("click", function(e) {
    e.preventDefault();
 
    window.scroll({
       top: 0,
       behavior: 'smooth'
    });
 
   })
 });

/////////////////////////////////////////////////////////////////////////


nameInput.addEventListener("click", function(e) {
   e.preventDefault();

   if(nameInput.value === "This field is required") {
      nameInput.value = "";
      nameInput.classList.remove("btn-send-error");
   }
});

email.addEventListener("click", function(e) {
   e.preventDefault();

   if(email.value === "Please use a valid email address") {
      email.value = "";
      email.classList.remove("btn-send-error");
   }
});


message.addEventListener("click", function(e) {
   e.preventDefault();

   if(message.value === "This field is required") {
      message.value = "";
      message.classList.remove("btn-send-error");
   }
});


btnSend.addEventListener("click", function(e) {
   e.preventDefault();

   checkField();
});


btnSend.addEventListener("touchstart", function(e){
   e.preventDefault();

   btnSend.classList.add("btn-send-touch");

}, {passive: false});


btnSend.addEventListener("touchend", function(e){

   btnSend.classList.remove("btn-send-touch");
   checkField();

}, {passive: false});



////////////////////////////////////////////////////////////

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

gitHub.forEach( el => {
    el.addEventListener("click", function(e) {
    e.preventDefault();

    const newWindow = window.open();
    newWindow.opener = null;
    newWindow.location.href = "https://github.com/";
    });
});


twitter.forEach( el => {
    el.addEventListener("click", function(e) {
    e.preventDefault();

    const newWindow = window.open();
    newWindow.opener = null;
    newWindow.location.href = "https://twitter.com/";
    });
});

linkedin.forEach( el => {
    el.addEventListener("click", function(e) {
    e.preventDefault();

    const newWindow = window.open();
    newWindow.opener = null;
    newWindow.location.href = "https://linkedin.com/";
    });
});






gitHubBox.forEach( el => {
   el.addEventListener("mouseenter", function(e) {
      e.preventDefault();

      gitHubPath.setAttribute("fill", "yellow");
      gitHubPathTop.setAttribute("fill", "yellow");

   });
});


gitHubBox.forEach( el => {
   el.addEventListener("mouseleave", function(e) {
      e.preventDefault();

      gitHubPath.setAttribute("fill", "white");
      gitHubPathTop.setAttribute("fill", "#33323D");

   });
});



twitterBox.forEach( el => {
   el.addEventListener("mouseenter", function(e) {
      e.preventDefault();

      twitterPath.setAttribute("fill", "#1DA1F2");
      twitterPathTop.setAttribute("fill", "#1DA1F2");

   });
});



twitterBox.forEach( el => {
   el.addEventListener("mouseleave", function(e) {
      e.preventDefault();

      twitterPath.setAttribute("fill", "white");
      twitterPathTop.setAttribute("fill", "#33323D");

   });
});


linkedinBox.forEach( el => {
   el.addEventListener("mouseenter", function(e) {
      e.preventDefault();

      linkedinPath.setAttribute("fill", "#0A66C2");
      linkedinPathTop.setAttribute("fill", "#0A66C2");

   });
});


linkedinBox.forEach( el => {
   el.addEventListener("mouseleave", function(e) {
      e.preventDefault();

      linkedinPath.setAttribute("fill", "white");
      linkedinPathTop.setAttribute("fill", "#33323D");

   });
});


imgHamburgerMenu.addEventListener("click", function(e) {
   e.preventDefault();

    choicesContainer.classList.toggle("show");
}, {passive: false})



////////////////////////////////////////////////////////////////////////




gitHubBox.forEach( el => {
   el.addEventListener("touchstart", function(e) {
      e.preventDefault();
    
      gitHubPath.setAttribute("fill", "yellow");
      gitHubPathTop.setAttribute("fill", "yellow");
    
    }, {passive: false});
});


gitHubBox.forEach( el => {
   el.addEventListener("touchend", function(e) {
      e.preventDefault();
    
      gitHubPath.setAttribute("fill", "white");
      gitHubPathTop.setAttribute("fill", "#33323D");
    
      const newWindow = window.open();
      newWindow.opener = null;
      newWindow.location.href = "https://github.com/";
    
    }, {passive: false});
});





twitterBox.forEach( el => {
   el.addEventListener("touchstart", function(e) {
      e.preventDefault();
    
      twitterPath.setAttribute("fill", "#1DA1F2");
      twitterPathTop.setAttribute("fill", "#1DA1F2");
    
    }, {passive: false});
});



twitterBox.forEach( el => {
   el.addEventListener("touchend", function(e) {
      e.preventDefault();
    
      twitterPath.setAttribute("fill", "white");
      twitterPathTop.setAttribute("fill", "#33323D");
    
      const newWindow = window.open();
      newWindow.opener = null;
      newWindow.location.href = "https://twitter.com/";
    
    }, {passive: false});
});




linkedinBox.forEach( el => {
   el.addEventListener("touchstart", function(e) {
      e.preventDefault();
    
      linkedinPath.setAttribute("fill", "#0A66C2");
      linkedinPathTop.setAttribute("fill", "#0A66C2");
    
    }, {passive: false});
});


linkedinBox.forEach( el => {
   el.addEventListener("touchend", function(e) {
      e.preventDefault();
    
      linkedinPath.setAttribute("fill", "white");
      linkedinPathTop.setAttribute("fill", "#33323D");
    
      const newWindow = window.open();
      newWindow.opener = null;
      newWindow.location.href = "https://linkedin.com/";
    
    }, {passive: false});
});