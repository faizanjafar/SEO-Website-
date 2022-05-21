

const scrollBtn = document.querySelector(".scroll-btn");
window.onscroll = function(){
    if(document.documentElement.scrollTop>100){
        scrollBtn.classList.add("show");
    }
    else{
        scrollBtn.classList.remove("show");
    }
}


function scrollToTop(){
    window.scrollTo(0, 0);
}