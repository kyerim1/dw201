
window.onload=function(){
// 화면이 전부 로딩 되면 시작하는 함수
    var icon = document.getElementsByClassName("strapIcon");    
    icon[0].addEventListener("click",function(){
        var list = document.getElementsByClassName("menu_list");
        list[0].style.display="block";
    });
}