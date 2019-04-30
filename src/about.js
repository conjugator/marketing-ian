let celements = document.querySelectorAll(".celement");

function centerCarousel() {
    let myCarousel = document.querySelector(".carousel");
    let winWidth = window.innerWidth;
    let carWidth = myCarousel.childElementCount * 600;
    myCarousel.style.left = "" + ((winWidth-carWidth)/2) + "px";
}

window.addEventListener("load", centerCarousel);