const board_img=["전지현.jpg","하지원.jpg","아오이유우.jpg","왕조현.jpg","주인.jpg",
"아만다.jpg","손예진.jpg","한가인.jpg","배수지.jpg","고아라.jpg","한지민.jpg","수애.jpg",
"이연희.jpg","신민아.jpg","신세경.jpg","박민영.jpg","한효주.jpg","소피마르소.jpg",
"이자벨.jpg","레이첼.png","스칼렛.jpg","로렌스.jpg","테른.jpg","디샤넬.jpg","클로이.jpg",
"제시카.jpg","메간폭스.jpg","샤론스톤.jpg"];

const board=[];
var gamer=[]; // 참가자 정보 저장 

$(function(){
    for(var i=0; i<28; i++){ board.push(0);}
    initBoard();
    draw();
    $("#setBt").click(setOpen);
    $("#dice_bt").click(dice_turn);
    
    
    t=setInterval(() => { // 참가자 등록 완료될때까지  감시 하기
        if(gamer.length>0){
            //console.log(gamer);
            $("#dice_bt").attr('disabled',false);

            clearInterval(t);
        }
    }, 50);
});