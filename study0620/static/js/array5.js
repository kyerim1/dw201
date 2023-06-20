
let num = new Array();

function init(){ //초기화
    //중복없이 랜덤값 넣기
    //indexOf를 이용해서 -1이 나오면 일치하는게 없다ㅏ.
    //  즉 중복되는 숫자가 없다는 뜻이니까  배열에저장
    num.push(Math.floor(Math.random()*10)+1 );
    for(var i=1; i<=3; i++){
        var temp = Math.floor(Math.random()*10)+1;
        if ( num.indexOf(temp) == -1){
            num.push(temp);
        }else{
            i--;
        }
    }
}

window.onload=function(){
    init(); //초기화 함수 실행
   let pic = document.getElementsByClassName("picture");
   for( var i=0; i<pic.length; i++){
        pic[i].addEventListener("click",same_search);
        pic[i].innerHTML = num[i%4]  ;
    }

}

function  same_search(){
    
}