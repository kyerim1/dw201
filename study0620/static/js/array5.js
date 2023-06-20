

window.onload=function(){
   let pic = document.getElementsByClassName("picture");
   for( var i=0; i<pic.length; i++){
        pic[i].addEventListener("click",same_search);
        pic[i].innerHTML = Math.floor(Math.random()*10)+1;
    }

}

function  same_search(){
    
}