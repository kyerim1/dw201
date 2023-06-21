
let path="./static/image/";
let image_name=["Chick.jpg","Crocodile.jpg","Dinosaur.jpg","Dolphin.jpg","Rabbit.jpg","Stingray.jpg"];
let image_position=new Array();
let isStart=false;
let count=0;
let end_count=0;
let isSame=[];
let selectImg=new Array();

window.onload=function(){
    
    var start_bt = document.getElementById('start');
    start_bt.addEventListener("click",game_start);
    var count = document.getElementById("count");
    count.innerText=0;
}

function image_init(){
    image_position.push(Math.floor(Math.random()*12));
    for(var i=1; i<12; i++){
        var tmp=Math.floor(Math.random()*12);
        if( image_position.indexOf(tmp) == -1){
            image_position.push(tmp);
        }else{
            --i;
        }
    }
    var img = document.getElementsByClassName("picture");
    for( var i=0; i<img.length; i++){
        img[image_position[i]].style.background="url("+(path+image_name[i%6])+") no-repeat center";
        img[image_position[i]].style.backgroundSize="contain";
    }
}
function game_start(){
    if(isStart){
        return;
    }
    image_init(); 
    var td = document.getElementsByClassName("picture_box");
    for(var i=0; i<td.length; i++){
        td[i].addEventListener("click", compare_img);
        isSame.push(false);
    }
    setTimeout(function(){
        var div = document.getElementsByClassName("picture");
        for(var i=0; i<div.length; i++){
            div[i].style.display="none";
        }
    },2000);
    isStart=true;
}
function compare_img(){
    if(!isStart){ return;}

    var child_div = this.firstChild;
    child_div.style.display="block";

    
    
}
function search_Element(obj){

}