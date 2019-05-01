let celements = document.querySelectorAll(".celement");
let lcArrow = document.querySelector("#leftArrow");
let rcArrow = document.querySelector("#rightArrow");

function centerCarousel() {
    let winWidth = window.innerWidth;
    let carWidth = celements.length * 600;
    leftPos = (winWidth-carWidth)/2;
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
    centerCarousel();
    positionArrows();
}

function rotateLeft() {
    let tempSrc = celements[0].querySelector(".cimg").getAttribute("src");  //.chi .getAttribute("src");
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

window.addEventListener("load", centerCarousel);
window.addEventListener("load", positionArrows);
window.addEventListener("resize", windowResized);
lcArrow.addEventListener("click", rotateLeft);
rcArrow.addEventListener("click", rotateRight);