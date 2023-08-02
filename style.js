const burger_menu = document.getElementById('burger')
const menu = document.querySelector("nav ul")
const div_title = document.querySelector("div.title")

burger_menu.addEventListener('click', function () {
    burger_menu.classList.toggle('active')
    menu.classList.toggle('active')
    div_title.classList.toggle('tall_title')
})



const insta = document.querySelector(".instagram");
const faceboo = document.querySelector(".facebook");
const ytb = document.querySelector(".youtube");

insta.addEventListener("mouseenter", function(){
    faceboo.style.filter = 'blur(3px) invert(1)';
    ytb.style.filter = 'blur(3px) invert(1)';
});

insta.addEventListener("mouseleave", function(){
    faceboo.style.filter = 'invert(1)';
    ytb.style.filter = 'invert(1)';
});

faceboo.addEventListener("mouseenter", function(){
    insta.style.filter = 'blur(3px) invert(1)';
    ytb.style.filter = 'blur(3px) invert(1)';
});

faceboo.addEventListener("mouseleave", function(){
    insta.style.filter = 'invert(1)';
    ytb.style.filter = 'invert(1)';
});

ytb.addEventListener("mouseenter", function(){
    faceboo.style.filter = 'blur(3px) invert(1)';
    insta.style.filter = 'blur(3px) invert(1)';
});

ytb.addEventListener("mouseleave", function(){
    faceboo.style.filter = 'invert(1)';
    insta.style.filter = 'invert(1)';
});
