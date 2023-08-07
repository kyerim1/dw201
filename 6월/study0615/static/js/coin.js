// 시간을 다루는 능력
// setTimeout() , setInterval()
//setTimeout() - 지정한 시간이후에 동작시키는 함수
//  setTimeout(실행할 함수 , 시간(밀리세컨드) );

//setInterval() - 지정한 시간 주기로 계속 동작
//  setInterval( 실행할 함수, 시간(밀리세컨드) ); 

let game=0; //전역변수
function start(){
    document.getElementById("출력").innerHTML="";
    game = setInterval( change_img , 100 );
    // game 변수에는 setInterval의 interval id가 저장된다.
    //interval id는 setInterval 함수의 고유 이름이다.
    // interval id를 통해서 setInterval를 중지 시킬 수 있다.
}
let 전환=1;

function change_img(){
    var 앞면 = "coin_front.png";
    var 뒷면 = "coin_back.png";
    var 이미지태그 = document.getElementById("오백원");

    if(전환==1){ // 1일때는 뒷면
        이미지태그.src="./static/image/"+뒷면;
        전환=0;
    }else{  // 0 일때 앞면
        이미지태그.src="./static/image/"+앞면;
        전환=1;
    }
}

function 결과(선택){
    clearInterval( game );
    var 앞면 = "coin_front.png";
    var 뒷면 = "coin_back.png";
    var 이미지태그 = document.getElementById("오백원");

    if(전환==1){ // 1일때는 뒷면
        이미지태그.src="./static/image/"+뒷면;
    }else{  // 0 일때 앞면
        이미지태그.src="./static/image/"+앞면;
    }

    if( 선택 == 전환 ){
        document.getElementById("출력").innerHTML="정답";
    }
}