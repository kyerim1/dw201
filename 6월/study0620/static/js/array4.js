
// 문자열에서  특정 문자열의 위치를 찾는방법 - indexOf
//  indexOf는  해당 문자열의 위치(인덱스)를 알려준다.
// 배열에서도 indexOf를 사용하여 값을 찾을수 있다.
// indexOf함수로 일치하는 데이터를 찾았다면 인덱스를반환
// 인덱스는 0 부터 시작
// 일치하는 데이터를 찾지못하면 -1 을 반환


const name=["이순신","최무선","강감찬","김유신","김춘추","이사부",
"을지문덕","정도전","정약용","장영실","한석봉","박팽년","안중근",
"김선향","김승겸","김철환","김태형","박수호","송은선","신상수",
"안지영","안태균","이상준","이영주","이우주","이충현","임민지",
"정길원","정예림","하지원"];

window.onload=function(){

    let srh_bt = document.getElementById("search_bt");
    srh_bt.addEventListener("click", search_name);
    let input = document.getElementById("search");
    input.addEventListener("keypress",function(e){
        if (e.keyCode == 13) 
            search_name();
    });
// addEventListener('이벤트명' , 동작할 함수)
};

function search_name(){
    let input = document.getElementById("search");
    let word = input.value;
    
    let res = document.getElementById("search_result");
    var out="";
    for(var i=0; i<name.length; i++){
        if(  name[i].indexOf(word) != -1 ){
            out+="<p>"+name[i]+"</p>";
        }
    }
    res.innerHTML= out;
    input.value="";  // input태그의 내용을 비우기
    input.focus(); // 검색 input태그에 커서 놓기 다음검색을위해
}김승겸  2
안태균 1
송은선 1
김철환 1
박수호 1
이상준 -2
이충현 1
김선향 2
김태형 1
정예림 1
임민지 1
