let celements = document.querySelectorAll(".celement");

let visibleIndex = 0;

celements.forEach(function(element, elemIndex) {
    if (elemIndex === visibleIndex){
        element.style.display = "inline-block";
    }
    else {
        element.style.display = "none";
    }
});