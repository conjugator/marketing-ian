let celements = document.querySelectorAll(".celement");

function centerCarousel() {
    let myCarousel = document.querySelector(".carousel");
    let winWidth = window.innerWidth;
    let carWidth = 1800 //myCarousel.style.width;
    console.log(carWidth);

    myCarousel.style.leftPos = (winWidth-carWidth)/2;
}

window.addEventListener("load", centerCarousel);