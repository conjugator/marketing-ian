const phoneWidth = 600; //600 px and below for "phone size" screen

let celements = document.querySelectorAll(".celement");
let navMenu = document.querySelector("nav");
let menuButton = document.querySelector(".menu-button");
let lcArrow = document.querySelector("#leftArrow");
let rcArrow = document.querySelector("#rightArrow");

function centerCarousel() {
    let winWidth = window.innerWidth;

    if (winWidth <= phoneWidth){
        //if it's on a phone, only display a single carousel pane
        celements.forEach(function(element){
            element.style.display = "none";
        });
        let theFocus = document.getElementById("focus")
        theFocus.style.display = "block";
        theFocus.style.width = "100%";
        theFocus.style.left = "0px";

    } else {
        //if it's on a full-sized screen
        celements.forEach(function(element){
            element.style.display = "block";
        });

        let carWidth = celements.length * 600;
        leftPos = (winWidth-carWidth)/2;
        celements.forEach(function(element){
            element.style.left = "" + (leftPos) + "px";
        })
    }
}

function positionArrows() {
    lcArrow.style.left = "20px";
    lcArrow.style.top = "300px";

    rcArrow.style.left = "" + (window.innerWidth - 70) + "px";
    rcArrow.style.top = "300px";
}

function windowResized() {
    centerCarousel();
    positionArrows();
}

function toggleNav() {
  if (navMenu.style.display == "block"){
    navMenu.style.display = "none";
  } else {
    navMenu.style.display = "block";
  }
}

function rotateRight() {
    let tempSrc = celements[0].querySelector(".cimg").getAttribute("src"); 
    let tempText = celements[0].querySelector(".ccaption").textContent;
    for (let n = 0; n < celements.length-1; n++){
        let newSrc = celements[n+1].querySelector(".cimg").getAttribute("src");
        let newText = celements[n+1].querySelector(".ccaption").textContent;
        celements[n].querySelector(".cimg").setAttribute("src", newSrc); 
        celements[n].querySelector(".ccaption").textContent = newText;
    }
    celements[celements.length-1].querySelector(".cimg").setAttribute("src", tempSrc);
    celements[celements.length-1].querySelector(".ccaption").textContent = tempText;
}

function rotateLeft() {
    let finalIndex = celements.length-1;
    let tempSrc = celements[finalIndex].querySelector(".cimg").getAttribute("src"); 
    let tempText = celements[finalIndex].querySelector(".ccaption").textContent;
    for (let n = finalIndex; n > 0; n--){
        let newSrc = celements[n-1].querySelector(".cimg").getAttribute("src");
        let newText = celements[n-1].querySelector(".ccaption").textContent;
        celements[n].querySelector(".cimg").setAttribute("src", newSrc); 
        celements[n].querySelector(".ccaption").textContent = newText;
    }
    celements[0].querySelector(".cimg").setAttribute("src", tempSrc);
    celements[0].querySelector(".ccaption").textContent = tempText;
}

window.addEventListener("load", centerCarousel);
window.addEventListener("load", positionArrows);
window.addEventListener("resize", windowResized);
menuButton.addEventListener("click", toggleNav);
lcArrow.addEventListener("click", rotateLeft);
rcArrow.addEventListener("click", rotateRight);