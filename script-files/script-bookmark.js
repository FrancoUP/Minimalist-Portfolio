const headBar = document.querySelector(".head-bar");
const rightContainer = document.querySelector(".right-container");

const switchLeft = document.querySelector(".switch-left");
const switchRight = document.querySelector(".switch-right");

/////////////////////////////////////////////////////////////////////

(function setPicturesOnScreenSize() {

   if(window.screen.width > 1180) {
    headBar.insertAdjacentHTML("afterend", `<div class="img-profile-container"><img class="img-profile-desktop" src="./../images/detail/desktop/image-bookmark-hero@2x.jpg"></div>`);
    rightContainer.insertAdjacentHTML("beforeend", `<div class="img-general"><img class="img-profile-desktop" src="./../images/detail/desktop/image-bookmark-preview-1@2x.jpg"></div>`);
    rightContainer.insertAdjacentHTML("beforeend", `<div class="img-general"><img class="img-profile-desktop" src="./../images/detail/desktop/image-bookmark-preview-2@2x.jpg"></div>`);
   } else if(window.screen.width > 650) {
    headBar.insertAdjacentHTML("afterend", `<div class="img-profile-container"><img class="img-profile-tablet" src="./../images/detail/tablet/image-bookmark-hero@2x.jpg"></div>`);
    rightContainer.insertAdjacentHTML("beforeend", `<div class="img-general"><img class="img-profile-tablet" src="./../images/detail/tablet/image-bookmark-preview-1@2x.jpg"></div>`);
    rightContainer.insertAdjacentHTML("beforeend", `<div class="img-general"><img class="img-profile-tablet" src="./../images/detail/tablet/image-bookmark-preview-2@2x.jpg"></div>`);
   } else {
    headBar.insertAdjacentHTML("afterend", `<div class="img-profile-container"><img class="img-profile-mobile" src="./../images/detail/mobile/image-bookmark-hero@2x.jpg"></div>`);
    rightContainer.insertAdjacentHTML("beforeend", `<div class="img-general"><img class="img-profile-mobile" src="./../images/detail/mobile/image-bookmark-preview-1@2x.jpg"></div>`);
    rightContainer.insertAdjacentHTML("beforeend", `<div class="img-general"><img class="img-profile-mobile" src="./../images/detail/mobile/image-bookmark-preview-2@2x.jpg"></div>`);
   } 

   const images = document.querySelectorAll(".img-general");

   [...images].forEach( el => {

      el.style.transition = "opacity 0.7s";
   });
})();


///////////////////////////////////////////////////////////////////////////


switchLeft.addEventListener("click", function(e){
   e.preventDefault();

   window.location.href = "./manage.html";

});


switchRight.addEventListener("click", function(e){
   e.preventDefault();

   window.location.href = "./insure.html";
   
});