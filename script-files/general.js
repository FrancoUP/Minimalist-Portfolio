const choicesContainer = document.querySelector(".choices-container");
const imgHamburgerMenu = document.querySelector(".img-hamburger-menu");

const gitHub = document.querySelector(".guitHub");
const twitter = document.querySelector(".twitter");
const linkedin = document.querySelector(".linkedin");
const gitHubBox = document.querySelector(".guitHub-box");
const gitHubPath = document.querySelector(".guitHub-path");
const twitterBox = document.querySelector(".twitter-box");
const twitterPath = document.querySelector(".twitter-path");
const linkedinBox = document.querySelector(".linkedin-box");
const linkedinPath = document.querySelector(".linkedin-path");

///////////////////////////////////////////////////////////////////


// To close the menu when i touche any part of tehe screen
document.body.addEventListener("click", function(e) {
  e.preventDefault();

  if(e.target !== imgHamburgerMenu) {
    choicesContainer.classList.remove("show");
  }
});


imgHamburgerMenu.addEventListener("click", function(e) {
  e.preventDefault();

   choicesContainer.classList.toggle("show");
});


gitHubBox.addEventListener("mouseenter", function(e) {
  e.preventDefault();

  gitHubPath.setAttribute("fill", "yellow");

});

gitHubBox.addEventListener("mouseleave", function(e) {
  e.preventDefault();

  gitHubPath.setAttribute("fill", "white");

});

gitHub.addEventListener("click", function(e) {
  e.preventDefault();

  const newWindow = window.open();
  newWindow.opener = null;
  newWindow.location.href = "https://github.com/";
});


twitterBox.addEventListener("mouseenter", function(e) {
  e.preventDefault();

  twitterPath.setAttribute("fill", "#1DA1F2");

});

twitterBox.addEventListener("mouseleave", function(e) {
  e.preventDefault();

  twitterPath.setAttribute("fill", "white");

});

twitter.addEventListener("click", function(e) {
  e.preventDefault();

  const newWindow = window.open();
  newWindow.opener = null;
  newWindow.location.href = "https://twitter.com/";
});




linkedinBox.addEventListener("mouseenter", function(e) {
  e.preventDefault();
  
    
  linkedinPath.setAttribute("fill", "#0A66C2");
  
});

linkedinBox.addEventListener("mouseleave", function(e) {
  e.preventDefault();

  linkedinPath.setAttribute("fill", "white");

});

linkedin.addEventListener("click", function(e) {
  e.preventDefault();

    const newWindow = window.open();
    newWindow.opener = null;
    newWindow.location.href = "https://linkedin.com/";
  
});


////////////////////////////////////////////////////////////////////



gitHubBox.addEventListener("touchstart", function(e) {
  e.preventDefault();

  gitHubPath.setAttribute("fill", "yellow");

}, {passive: false});

gitHubBox.addEventListener("touchend", function(e) {
  e.preventDefault();

  gitHubPath.setAttribute("fill", "white");

  const newWindow = window.open();
  newWindow.opener = null;
  newWindow.location.href = "https://github.com/";

}, {passive: false});



twitterBox.addEventListener("touchstart", function(e) {
  e.preventDefault();

  twitterPath.setAttribute("fill", "#1DA1F2");

}, {passive: false});

twitterBox.addEventListener("touchend", function(e) {
  e.preventDefault();

  twitterPath.setAttribute("fill", "white");

  const newWindow = window.open();
  newWindow.opener = null;
  newWindow.location.href = "https://twitter.com/";

}, {passive: false});



linkedinBox.addEventListener("touchstart", function(e) {
  e.preventDefault();

  linkedinPath.setAttribute("fill", "#0A66C2");

}, {passive: false});

linkedinBox.addEventListener("touchend", function(e) {
  e.preventDefault();

  linkedinPath.setAttribute("fill", "white");

  const newWindow = window.open();
  newWindow.opener = null;
  newWindow.location.href = "https://linkedin.com/";

}, {passive: false});
