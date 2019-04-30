let celements = document.querySelectorAll(".celement");

function centerCarousel() {
    let myCarousel = document.querySelector(".carousel");
    let winWidth = window.innerWidth;
    let carWidth = myCarousel.childElementCount * 600;
    myCarousel.style.left = "" + ((winWidth-carWidth)/2) + "px";
    myCarousel.style.width = "" + carWidth + "px";
    myCarousel.style.overflow = "visible";
}

window.addEventListener("load", centerCarousel);