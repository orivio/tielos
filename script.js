function timeUpd() {
    var timetxt = document.querySelector("#timeelement");
    timetxt.innerHTML = new Date().toLocaleString();
}
setInterval(timeUpd, 1000);

makeDraggable(document.getElementById("aboutme"));

function makeDraggable(element){
    var initialX = 0;
    var initialY = 0;
    var currentX = 0;
    var currentY = 0;
    if (document.getElementById(element.id + "header")){
        document.getElementById(element.id + "header").onmousedown = startDrag;
    }
    else{
        element.onmousedown = startDrag;
    }

    function startDrag(e){
        e = e || window.event;
        e.preventDefault();
        initialX = e.clientX;
        initialY = e.clientY;
        document.onmouseup = stopDrag;
        document.onmousemove = dragWin;
    }

    function stopDrag(){
        document.onmouseup = null;
        document.onmousemove = null;
    }

    function dragWin(e){
        e = e || window.event;
        e.preventDefault();
        currentX = initialX - e.clientX;
        currentY = initialY - e.clientY;
        initialY = e.clientY;
        initialX = e.clientX;

        element.style.top = (element.offsetTop - currentY) + "px";
        element.style.left = (element.offsetLeft - currentX) + "px";
    }
}

var aboutWin = document.querySelector("#aboutme");
var closeButton = document.querySelector("#aboutmeclosebutton");
var openButton = document.querySelector("#aboutmeopenbutton");

closeButton.addEventListener("click", function(){
    closeWindow(aboutme);
});
openButton.addEventListener("click", function(){
    openWindow(aboutme);
})

function closeWindow(e){
    e.style.transition = "all 0.1s ease-in-out";
    e.style.transform = "scale(0.1)";
    setTimeout(() => {
        e.style.display = "none";
        //e.style.transform = "scale(0.1)";
        e.style.transition = "none";
    }, 100);
}

function openWindow(e){
    if(e.style.display === "none"){
        e.style.top = "0px";
        e.style.left = "0px";
    }
    e.style.transform = "scale(0.1)";
    e.style.display = "flex";
    e.style.transition = "all 0.1s ease-in-out";
    requestAnimationFrame(() => {
        e.style.transform = "scale(1)";
    });
    setTimeout(() => {
        e.style.transition = "none";
    }, 100);
}