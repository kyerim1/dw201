
// 기본 배열, 모든 이미지를 다 가지고있는 기본배열
const image=["골든리트리버.jpg","길냥이.jpg", "동경개.jpg","랙돌.jpeg",
"말티즈.jpg","메인쿤.jpg","바센지.jpg","발발이.jpeg","보더콜리.jpg",
"보르조이.jpg","봄베이.jpg","불테리어.jpg","브리아드.jpg","삽살개.jpg",
"샴.jpg","셰퍼드.jpg","소말리.png","슈나우저.jpg","스핑크스.jpg",
"시바견.jpg","시추.jpg","오리엔탈.jpg","이그제틱.jpg","진돗개.jpg",
"치와와.jpg","코니시렉스.jpg","페르시안 고양이.jpg","푸들.jpeg","풍산개.jpg",
"핀셔.jpg","허스키.jpg","웰시코기.jpg"];

const kind = ["골든리트리버", "길냥이", "동경개","랙돌","말티즈","메인쿤",
"바센지","발발이","보더콜리","보르조이","봄베이","불테리어","브리아드",
"삽살개","샴","셰퍼드","소말리","슈나우저","스핑크스","시바견","시추",
"오리엔탈","이그제틱","진돗개","치와와","코니시렉스","페르시안 고양이",
"푸들","풍산개","핀셔","허스키","웰시코기"];


let 토너먼트1=new Array();  //현재 토너먼트
let 토너먼트2=new Array(); // 다음 토너먼트 ( 현재 토너먼트에서 선택한것)
let 순서=new Array();
let round = 32;  //현재 몇강?( 처음은 32강)
let count = 1;// 현재 순서 (처음은 1번)

function 순서섞기(){
    for(var i=1; i<=round; i++){
        var tmp = Math.floor(Math.random() * round);
        if( 순서.indexOf(tmp) == -1){
            순서.push(tmp);
        }else{
            --i;
        }
    }
}
function 태그선택(id){
    return document.getElementById(id);
}

window.onload=function(){
    var title =태그선택("title");
    title.innerHTML=round+"강  "+count+"/"+(round/2);

    순서섞기();
    show();
    //이미지 클릭 이벤트 등록
    var left=태그선택("left");
    var right=태그선택("right");
    left.addEventListener("click",선택);
    right.addEventListener("click",선택);
}

function 선택(){
    count++;
    show();
}
function show(){
    var left= 태그선택("leftimg");
    var right = 태그선택("rightimg");
    var leftText=태그선택("leftText");
    var rightText=태그선택("rightText");

    left.src="./static/image/"+image[순서[count*2-2]];
    right.src="./static/image/"+image[순서[count*2-1]];
    leftText.innerHTML=kind[순서[count*2-2]];
    rightText.innerHTML=kind[순서[count*2-1]];
}