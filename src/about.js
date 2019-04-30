let celements = document.querySelectorAll(".celement");
let lcArrow = document.querySelector("#leftArrow");
let rcArrow = document.querySelector("#rightArrow");

function centerCarousel() {
    //let myCarousel = document.querySelector(".carousel");
    let winWidth = window.innerWidth;
    let carWidth = celements.length * 600;
    //myCarousel.style.left = "" + ((winWidth-carWidth)/2) + "px";
    //myCarousel.style.width = "" + carWidth + "px";
    //myCarousel.style.overflow = "visible";
    leftPos = (winWidth-carWidth)/2;
    //for (let n = 0; n < celements.length; n++){
    //    celements[n].style.left = "" + (leftPos + n*600) + "px";
    //}
    //celements[0].style.left = "" + (leftPos) + "px";
    celements.forEach(function(element){
        element.style.left = "" + (leftPos) + "px";
    })
}

function positionArrows() {
    lcArrow.style.left = "20px";
    lcArrow.style.top = "300px";

    rcArrow.style.left = "" + (window.innerWidth - 70) + "px";
    rcArrow.style.top = "300px";
}

function windowResized() {
    
}

window.addEventListener("load", centerCarousel);
window.addEventListener("load", positionArrows);
window.addEventListener("resize", windowResized);