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
    console.log(celements);

    //tempElem = celements[0].children;
    //console.log(celements[0].textContent);
    //console.log(tempElem);
    let tempSrc = celements[0].querySelector(".cimg").getAttribute("src");  //.chi .getAttribute("src");
    console.log(tempSrc);
    let tempText = celements[0].querySelector(".ccaption").textContent;
    for (let n = 0; n < celements.length-1; n++){
        //celements[n].children = celements[n+1].children;
        //console.log("" + n + "of" + (celements.length));
        let newSrc = celements[n+1].querySelector(".cimg").getAttribute("src");
        let newText = celements[n+1].querySelector(".ccaption").textContent;

        console.log(newSrc);

        celements[n].querySelector(".cimg").setAttribute("src", "" + newSrc + ""); 
        console.log(celements[n].querySelector(".cimg").getAttribute("src"));
        console.log(celements[n].querySelector(".cimg").src);
        celements[n].querySelector(".ccaption").textContent = newText;
    }

    console.log(tempSrc);
    console.log(celements[celements.length-1]);
    console.log(celements[celements.length-1].querySelector("img"));
    console.log(celements[celements.length-1].querySelector("img").src);
    console.log(celements[celements.length-1].querySelector("img").getAttribute("src"));
    celements[celements.length-1].querySelector("img").src = tempSrc;
    celements[celements.length-1].textContent = tempText;
    console.log(celements[celements.length-1]);
    console.log(celements[celements.length-1].querySelector(".cimg"));
    console.log(celements);
}

window.addEventListener("load", centerCarousel);
window.addEventListener("load", positionArrows);
window.addEventListener("resize", windowResized);
lcArrow.addEventListener("click", rotateLeft);
rcArrow.addEventListener("click", rotateRight);