var lastScrollTop = 0;
var header = document.getElementById('header');

window.addEventListener('scroll',function(){

    var scrollTop = window.pageYOffset || this.document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop){
        header.style.top = "-60px";
    }else{
        header.style.top = "0";
    }
    lastScrollTop = scrollTop;
});