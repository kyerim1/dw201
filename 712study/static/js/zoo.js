window.onload=function(){
    var search_bt = document.getElementsByClassName("search_button");
    search_bt[0].addEventListener("click",function(){
        var bar = document.querySelectorAll(".search_bar")[0];
        bar.style.display="block";
    });
    var search_close = document.getElementsByClassName("search_close");
    search_close[0].addEventListener("click",function(){
        var bar = document.querySelectorAll(".search_bar")[0];
        bar.style.display="none";
    })
    var menu = document.getElementsByClassName("main_menu")[0];
    menu.addEventListener("mouseover",function(){
        var nav = document.getElementById("nav");
        nav.style.background="#fff";
        nav.style.height="400px";
    });
    menu.addEventListener("mouseleave",function(){
        var nav = document.getElementById("nav");
        nav.style.background="none";
        nav.style.height="80px";
    });
}