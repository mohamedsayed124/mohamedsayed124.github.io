//Check If There's Local Storage Color Options
let mainColors = localStorage.getItem("color-option");

if (mainColors !== null) {
    //console.log('local storage is not empty you can set it on root now');
    document.documentElement.style.setProperty('--main-color', mainColors);
    //check for active class
    //remove active class from all ci=olors list items
    document.querySelectorAll(".colors-list li").forEach(element => {
        element.classList.remove("active");

        //add active class on element with data-color === local storage items
        if (element.dataset.color === mainColors) {
            //add active class
            element.classList.add("active");
        }
    });

}
//Background Option
let backgroundOption = true;
//Variable To Control The Interval
let backgroundInterval;

//Check If There's Local Storage Random Background
let backgroundLocalItem = localStorage.getItem("background_option");

//Check If Random Background Local Is Not Empty
if (backgroundLocalItem !== null) {
    if (backgroundLocalItem === 'true') {
        backgroundOption = true;
    } else {
        backgroundOption = false;
    }
    //Remove Active Class From All Spans
    document.querySelectorAll(".random-backgrounds span").forEach(element => {
        element.classList.remove("active");
    });
    if (backgroundLocalItem === 'true') {
        document.querySelector(".random-backgrounds .yes").classList.add("active");
    } else {
        document.querySelector(".random-backgrounds .no").classList.add("active");
    }
}

//Toggle Spin Class On Icon
document.querySelector(".toggle-settings .fa-gear").onclick = function() {
        // Toggle Class Fa-spin For Rotation On Self
        this.classList.toggle("fa-spin");
        // Toggle Class Open On Main Settings Box
        document.querySelector(".settings-box").classList.toggle("open");
    }
    //Switch Colors
const colorsli = document.querySelectorAll(".colors-list li");
colorsli.forEach(li => {
    //loop on list items
    li.addEventListener("click", (e) => {
        //set color in root
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
        //Set Color On Local Storage
        localStorage.setItem("color-option", e.target.dataset.color);
        handelActive(e);
    });
});
//Switch Backgrounds Options 
const randomBackEl = document.querySelectorAll(".random-backgrounds span");
Landing Page Element
let LandingPage = document.querySelector('.gallary');
//Get Array Of Imgs
let imgsArray = ['01.jpg', '02.jpg', '03.jpg', '04.png', '05.png'];


//Function to randoize imgs
function randomizeImgs() {
    if (backgroundOption === true) {
        backgroundInterval = setInterval(() => {
            //Get Random Number
            let randomNumber = Math.floor(Math.random() * imgsArray.length);
            //Change Backgroung Img Url
            LandingPage.style.backgroundImage = 'url("imgs/me' + imgsArray[randomNumber] + '")';
        }, 1000)
    }
}
randomizeImgs();

//Select Skills Selector
let ourSkills = document.querySelector(".skills");
window.onscroll = function() {
    //Skills Offset Top
    let skillsOffsetTop = ourSkills.offsetTop;

    //Outer Height
    let skilldOuterHeight = ourSkills.offsetHeight;
    //window Height
    let windowHeight = this.innerHeight;
    //Window ScrollTop
    let windowScrollTop = this.pageYOffset;
    if (windowScrollTop > (skillsOffsetTop + skilldOuterHeight - windowHeight)) {
        let allSkills = document.querySelectorAll(".skill-box .skill-progress span");
        allSkills.forEach(skill => {
            skill.style.width = skill.dataset.progress;
        });
    }
};
//Create Popup wiht the image
let ourGallary = document.querySelectorAll(".gallary img");
ourGallary.forEach(img => {
    img.addEventListener('click', (e) => {
        //Create OverLay Element
        let overlay = document.createElement("div");
        //Add Class To Overlay
        overlay.className = 'popup-overlay';
        //Append Overlay To Body
        document.body.appendChild(overlay);
        //Create The Popup
        let popupBox = document.createElement("div");
        //Add Class To the popup box
        popupBox.className = 'popup-box';
        if (img.alt !== null) {
            //Create Heading
            let imgHeading = document.createElement("h3");
            //Create text For Heading
            let imgText = document.createTextNode(img.alt);
            //Append The Text To The Headng
            imgHeading.appendChild(imgText);
            //Append The Heading To The Popup Box
            popupBox.appendChild(imgHeading);
        }
        //Create The Image
        let popupImage = document.createElement("img");
        //Set Image Source
        popupImage.src = img.src;
        //Add Imagge to popup box
        popupBox.appendChild(popupImage);
        //Append The POpup to box
        document.body.appendChild(popupBox);
        //Create The Close Span
        let closeButton = document.createElement("span");
        //Create The Close Botton Text
        let closeButtonText = document.createTextNode("X");
        //Append text to class button
        closeButton.appendChild(closeButtonText);
        //Add Class t close Button
        closeButton.className = 'close-button';
        //Add Close Button To The Popup Box
        popupBox.appendChild(closeButton);
    });
});

//Close Popup
document.addEventListener("click", function(e) {
        if (e.target.className == 'close-button') {
            //Remove The Current Popup
            e.target.parentNode.remove();
            //Remove Overlay
            document.querySelector(".popup-overlay").remove();
        }
    })
    //Select all bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet");
allBullets.forEach(bullet => {
    bullet.addEventListener("click", (e) => {
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function handelActive(ev) {
    ev.target.parentElement.querySelectorAll(".active").forEach(element => {
        element.classList.remove("active");
    });
    ev.target.classList.add("active");
}
let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".nav-bullets");
let bulletLocalItem = localStorage.getItem("bullets_option");
if (bulletLocalItem !== null) {
    bulletsSpan.forEach(span => {
        span.classList.remove("active");
    });
    if (bulletLocalItem === 'block') {
        bulletsContainer.style.display = 'block';
        document.querySelector(".bullets-option .yes").classList.add("active");
    } else {
        bulletsContainer.style.display = 'none';
        document.querySelector(".bullets-option .no").classList.add("active");
    }
}
bulletsSpan.forEach(span => {
    span.addEventListener("click", (e) => {
        if (span.dataset.display === 'show') {
            bulletsContainer.style.display = 'block';
            localStorage.setItem("bullets_option", 'block');
        } else {
            bulletsContainer.style.display = 'none';
            localStorage.setItem("bullets_option", 'none');
        }
        handelActive(e);
    });
});
// Reset Button
document.querySelector(".reset-options").onclick = function() {

    localStorage.clear();
    // localStorage.removeItem(".bullets-option");
    // localStorage.removeItem(".color-option");
    // localStorage.removeItem(".background-option");
    // Reload Window
    window.location.reload();
};
// Toggle Menu
let toggleBtn = document.querySelector(".toggle-menu");
let tlinks = document.querySelector(".links");
toggleBtn.onclick = function(e) {
    // Stop Propagation
    e.stopPropagation();
    // Toggle Class "menu-active" On Button
    this.classList.toggle("menu-active");
    // Toggle Class "open" On Links
    tlinks.classList.toggle("open");
};
// Click Anywhere Out side Menu And Toggle Button
document.addEventListener("click", (e) => {
    if (e.target !== toggleBtn && e.target !== tlinks) {
        // Chick If Menu Is Open
        if (tlinks.classList.contains("open")) {
            // Toggle Class "menu-active" On Button
            toggleBtn.classList.toggle("menu-active");
            // Toggle Class "open" On Links
            tlinks.classList.toggle("open");
        }
    }
});
// Stop Propagation On Menu
tlinks.onclick = function(e) {
    e.stopPropagation();
}