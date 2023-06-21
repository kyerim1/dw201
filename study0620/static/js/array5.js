
let show=false; //start 버튼 클릭 유무
let cmp_num=new Array(); // 두개의 숫자를 비교하기 위한 배열
let choice = new Array(); // 클릭한 두개의 span태그 인덱스 저장 배열
let end=0; // 4가 되면 게임 끝
let step=0; // 클릭횟수 제한을 위한 변수

let num = new Array(); // 화면에 표시되는 숫자 저장 배열 
let board=new Array();  //  숫자가 출력될 위치 저장 배열

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

    board.push(Math.floor(Math.random()*8) );
    for(var i=1; i<=7; i++){
        var temp = Math.floor(Math.random()*8);
        if ( board.indexOf(temp) == -1){
            board.push(temp);
        }else{
            i--;
        }
    }
    var count = document.getElementById("count");
    count.innerText=0;
}

window.onload=function(){
    init(); //초기화 함수 실행
    let start = document.getElementById("start");
// id 가 start인 버튼 태그가져오기
    start.addEventListener("click",play);
// 버튼 태그에 클릭 이벤트 등록하기(실행함수는 play 함수)

   let pic = document.getElementsByClassName("picture");
   for( var i=0; i<pic.length; i++){
        pic[i].addEventListener("click",same_search);
    }

}
function play(){
    let pic = document.getElementsByClassName("back");
    for( var i=0; i<pic.length; i++){
         pic[board[i]].innerHTML = num[i%4]  ;
     }

    setTimeout( function(){ 
        let pic = document.getElementsByClassName("back");
        for(var i=0; i<pic.length; i++){
            pic[i].style.display="none";
        }
        show = true; // start 버튼 클릭 했다 라는 의미 
      }, 2000);
    
}

function  same_search(){
     if( !show ){ // show 변수가 false라면 not연산에 의해  true가 적용
                  // show변수가 true라면 not연산에 의해 false가 적용
        alert("start 버튼을 클릭하세요");
        return;  // start버튼을 클릭하지 않았으면 same_search함수를 
        //실행 시키지않는다.
     }

     // 클릭횟수 증가시키기
     if( step == 20){ //20번클릭하면 더이상 진행이 되지않게 
        //show는 false로  바꾸고 함수 종료
        alert("다음기회에 도전하세요");
        show=false;
        return;
     }
     var count = document.getElementById("count");
     count.innerText = ++step;
     

    var child = this.children[0];  //child변수는 td태그의 자식인 span이다.
    child.style.display="inline";
    
    let span = document.getElementsByClassName("back");
    for(var i=0; i<span.length; i++){
        if( span[i] === child )
            choice.push(i); // 클릭한 td의 span태그 인덱스를 배열에 저장
    }
    cmp_num.push( parseInt(child.innerText) ); //클릭한 td>span의 숫자를 배열에저장

    if( cmp_num.length == 2 ){ // 배열에 숫자 2개가 저장되어있다면 비교
        if(cmp_num[0] == cmp_num[1] ){
            cmp_num=new Array();
            choice=new Array();
            end++; // 같은숫자 찾으면 end변수 1씩 증가
        }else{
            setTimeout( function(){
                cmp_num = new Array();
                let pic = document.getElementsByClassName("back");
                for(var i=0; i<choice.length; i++){
                    pic[choice[i]].style.display="none";
                }
                choice= new Array();
            }, 500);
        }
    }

    if(end == 4){
        alert("게임 끝");
        show=false;
    }
}
//  자식태그 가져오는 방법 :  
//  children - 모든 자식태그를 htmlcollextion 배열로 가져온다.
//  childNodes - 모든 자식태그를 nodeList의 배열로 가져온다.
// firstChild - 첫번째 자식 태그
//  lastChild - 마지막 자식 태그


// getElementById() 또는 getElementsByClassName() 등 을 사용하면
//  태그의 객체라는것이 반환된다.  태그의 객체를 변수에 담아서 사용해왔다.
//  자바스크립트에서는  html 태그를  element, 요소 또는 객체라고 한다.
//  객체를 표현하는 방법중에  자기 자신을 의미하는 this가있다.
//  same_search함수를 실행 시킨건 td태그이다. 
//  즉 td라는 객체에 의해 same_search함수가 실행된것이다.  
//  same_search함수안에서  this라고 사용하면  same_search함수를 실행시킨
//  td 태그를 의미한다. 