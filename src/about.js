let celements = document.querySelectorAll(".celement");

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

window.addEventListener("load", centerCarousel);