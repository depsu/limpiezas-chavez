window.addEventListener("scroll", function(){
    var header = document.querySelector("nav");
    nav.classList.toggle("abajo",window.scrollY>0);
})