
let com=0; // setInterval 의 id 저장
let com_img=""; // 컴퓨터 이미지 img 태그
let path="./static/image/"; //이미지 기본경로 값
let res=""; // 결과 출력 태그 (b 태그)

function select(user){
    clearInterval(com); // 컴퓨터 이미지 변경되는거 멈추기 setInterval중지
    var ctemp = Math.floor(Math.random() *3);
    // 이미지 에 상관없이 별도의 컴퓨터 가위바위보 값을 구한다.
    // setInterval에 의해 타이밍이 맞지않는 현상에 신경쓸 필요가 없어진다.

    if(user==ctemp){ //랜덤값과 내가 선택한 가위 바위 보에 따른 결과를 if로표현
        seq=ctemp; //seq 값을 랜덤값으로 변경한다.
        change();  // seq값에따라 컴퓨터 이미지를 바꿔주는 함수
        res.innerText="비김";
    }else if( (user==0 &&ctemp==2) 
                || (user==1 && ctemp==0) || (user==2&&ctemp==1)){
        seq=ctemp;
        change();
        res.innerText="승";
    }else{
        seq=ctemp;
        change();
        res.innerText="패";
    }
}

function start(){
    // 가위바위보 게임 시작하면 결과 초기화
    res = document.getElementById("result");
    res.innerText='';
    
    // 컴퓨터 가위바위보 이미지 순차적으로 보이게 
    com = setInterval( change , 100);
    
}
let seq=0; // seq값이 0이면 가위 1이면 바위 2라면 보
function change(){
    com_img = document.getElementById("game_image");
    if(seq==0){
        com_img.src = path + "scissors.png";
        seq=1;
    }else if(seq==1){
        com_img.src = path + "rock.png"; seq=2;
    }else if(seq==2){
        com_img.src = path + "paper.png"; seq=0;
    }
}