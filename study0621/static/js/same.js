
let path="./static/image/";
let image_name=["Chick.jpg","Crocodile.jpg","Dinosaur.jpg","Dolphin.jpg","Rabbit.jpg","Stingray.jpg"];
let image_position=new Array(); // 이미지 출력할 위치 배열
let isStart=false; // start 버튼 클릭 유무
let count=0;  // 클릭횟수
let end_count=0; // 이미지 맞춘 갯수
let isSame=[]; // 같은 이미지로 선택이 된것인가?
let selectImg=new Array(); // 현재 선택한 이미지

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
        img[i].style.background="url("+(path+image_name[image_position[i]%6])+") no-repeat center";
        img[i].style.backgroundSize="contain";
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


    if( count == 30){ //20번클릭하면 더이상 진행이 되지않게 
        //show는 false로  바꾸고 함수 종료
        alert("다음기회에 도전하세요");
        isStart=false;
        return;
    }
    var cnt = document.getElementById("count");
    cnt.innerText = ++count;

    var child_div = this.firstChild;
    child_div.style.display="block";

    let div = document.getElementsByClassName("picture");
    for(var i=0; i<div.length; i++){
        if( div[i] === child_div )
            selectImg.push(i); // 클릭한 td의 span태그 인덱스를 배열에 저장
    }
    if( selectImg.length == 2){
        if( image_position[selectImg[0]]%6 == image_position[selectImg[1]]%6){
            isSame[selectImg[0]] = true;
            isSame[selectImg[1]] = true;
            selectImg=new Array();
            end_count++;
        }else{  // 같은 이미지 선택 아니면 
            setTimeout( function(){
                selectImg = new Array();
                let pic = document.getElementsByClassName("picture");
                for(var i=0; i<isSame.length; i++){
                    if(!isSame[i]){
                        pic[i].style.display="none";
                    }
                }
            }, 1000);
        }
    }
    if(end_count == 6){
        alert("게임 끝");
        isStart=false;
    }
    
    
}
function search_Element(obj){

}