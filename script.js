
var header = document.querySelector(".header-navbar");
var ctg = header.getElementsByClassName("navbar-element");

for (var i = 0; i < ctg.length; i++) {
  ctg[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
  });
}


var sidebar = document.querySelector(".sidebar");
var sidebarCategory = sidebar.getElementsByClassName("sidebar-category");
var sidebarCategories = sidebar.getElementsByClassName("sidebar-categories");
var subscriptionCategories = sidebar.getElementsByClassName("subscription-categories");

for (var i = 0; i < sidebarCategory.length; i++) {
    sidebarCategory[i].addEventListener("click", function() {
        var current1 = document.getElementsByClassName("selected");
        current1[0].className = current1[0].className.replace(" selected", "");
        // current2[0].className = current2[0].className.replace(" selected-img", "");
        this.className += " selected";      
    });
}

// var sidebarImg = sidebar.getElementsByClassName("sidebar-category-sml");

// for (var i = 0; i < sidebarImg.length; i++) {
//     sidebarImg[i].addEventListener("click", function() {
//         var current = document.getElementsByClassName("selected-img");
//         console.log(current);
//         current[0].className = current[0].className.replace(" active", "");
//         this.className += " selected-img";
//     });
// }

var hamburgerBtnBox = document.querySelector(".guide-button-box");
var sidebarSmlItems = document.querySelector(".sidebar-category-sml");
var hr = document.querySelectorAll("hr");
var sidebarCategoriesSml = document.querySelector(".sidebar-categories-sml");

var screenWidth = window.screen.width * window.devicePixelRatio;

hamburgerBtnBox.addEventListener("click", open);

function open() {
    if(screenWidth > 1331){
        for (var i = 0; i < sidebarCategories.length; i++) {
            sidebarCategories[i].style.display = "none";
        }

        for (var i = 0; i < subscriptionCategories.length; i++) {
            subscriptionCategories[i].style.display = "none";
        }

        for (var i = 0; i < hr.length; i++){
            hr[i].style.display = "none";
        }  

        document.querySelector(".sidebar-bottom-info").style.display = "none";
        document.querySelector(".subscription-categories").style.display = "none";           
        sidebarCategoriesSml.style.display = "grid";
        sidebar.style.overflow = "hidden";
        sidebar.style.width = "72px";
        sidebar.style.height = "100%"
    }
}

var nextBtn = document.querySelector(".next-btn");
console.log(nextBtn);

nextBtn.addEventListener("click", scrollRight);

function scrollRight() {
    header.scrollBy(200, 0);
}

//VIDEO
