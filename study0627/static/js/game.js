
const Brow=5;
const Bcol=5;

let game_state =false; //  시작 여부 확인
let bingo=new Array(); // 빙고 숫자 배열

window.onload=function(){
    var board=document.querySelector("#board");
    var out="";
    for(var i=1; i<=Brow; i++){ // 줄
        out += "<tr>";
        for(var k=1; k<=Bcol; k++){  //칸
            out += "<td class='Gnum'> </td>";
        }
        out += "</tr>";
    }
    board.innerHTML=out;


    var state = document.querySelector("#state_board");
    var out="";
    for(var i=0; i<=1; i++){
        out += "<tr>";
        for(var k=1; k<=25; k++){
            out+="<td class='stnum'>"+(i*25+k)+"</td>";
        }
        out += "</tr>";
    }
    state.innerHTML=out;
}

function init(){
    // 25개 숫자 중복없이 랜덤하게 생성
    for(var i=0; i<25; i++){
        var tmp = Math.floor(Math.random()*50)+1;
        if(bingo.indexOf(tmp) == -1)
            bingo.push(tmp);
        else
            i--;
    }
    // td 클릭 이벤트 등록과  25개 숫자 td에 출력 

    var td = document.querySelectorAll(".Gnum");
    for( var i=0; i<td.length; i++){
        td[i].addEventListener("click", bingo_check);
        td[i].innerText=bingo[i];
    }
}

function start(){
    if(game_state){
        alert("게임이 진행중입니다.");
        return;
    }
    init();
    game_state=true;
}

function bingo_check(){

}