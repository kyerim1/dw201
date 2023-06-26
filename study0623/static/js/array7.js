/*
    현재 태그(엘리먼트)의 다음 태그를 가져오는방법
    - .nextSibling   (형제태그를 의미한다.)
    태그(엘리먼트) 객체에 클래스를 추가하는 방법
    -  element.classList.add('클래스이름');
    클래스 여러개 추가
    - element.classList.add('클래스이름','클래스이름');
    클래스 이름 변경
    - element.classList.replace('변경전이름','변경후이름');
    클래스 삭제
    -  element.classList.toggle('삭제할 클래스 이름');
    조건에 따라 클래스 삭제
    - element.classList.toggle('삭제클래스이름',조건식);
    태그(element) 객체에 클래스가 있는지 확인방법
    -  element.classList.contains('클래스이름');
    -  해당 클래스이름이 있다면 true 없다면 false

    dataset
    - HTML5부터는 태그에 데이터를 담을수있는 개념이생겼다.
    - 데이터 속성은 태그에  data- 로 시작한다.
    - dataset은 브라우저에 어떠한 행동도 관여하지 않기 때문에
      자유롭게  데이터를 넣어사용하면 된다.
    -  자바스크립트에서 활용을 할 수있고 html에서는 다른속성처럼
     태그에 영향을 주지않는다. 
    -  다른 속성이라 하면 width, height, style 등등
      <div width="200">  -> 이거는 width라는 속성에 의해
      div의 크기에 영향을 준다.  하지만 dataset은 영향을 주지않는다.

      window.innerWidth;   브라우저의 화면 너비
      window.innerHeight;  브라우저의 화면 높이
      window.outerWidth;  브라우저의 전체 너비
      window.outerHeight; 브라우저의 전체 높이

    브라우저 의 크기가 변경되면 동작하는 함수 - resize();
*/

let lotto=new Array(); // 역대 당첨 번호 저장될 배열



window.onresize=function(){
    var wd = window.innerWidth; 
    if( wd > 786){
        var list = document.getElementsByClassName("menu_list")[0];
        list.style.display="none";
        list.dataset.show='1';
    }
}

window.onload=function(){
// 화면이 전부 로딩 되면 시작하는 함수
    var icon = document.getElementsByClassName("strapIcon");    
    icon[0].addEventListener("click", open_close);

    content= document.querySelector("#content");

    var file = document.querySelector("#lotto");
    file.addEventListener("input",function(e){
        let target = e.target; // 선택된 파일 참조
        let files = target.files; // 선택 되 파일은 배열의 형식으로 저장된다.
        //  첫번째 파일 참조를 해야 내가 선택한 파일을 읽을수 있다.
        let reader = new FileReader();
        reader.addEventListener("load",function(){
            var str = reader.result;
            var temp = str.split("\n");
            
            for( var i in temp){
                lotto.push( temp[i].split("\t") );
            }
            alert(lotto[0][3]);
        });
        reader.readAsText(files[0]);
    });

}

function open_close(){
    var list = document.getElementsByClassName("strapIcon")[0].nextSibling;
    var show = list.dataset.show;
    if(show==1){
        list.style.display="block";
        list.dataset.show='0';
    }else{
        list.style.display="none";
        list.dataset.show='1';
    }

    // var isActive = list.classList.contains("list_active");
    // if(isActive)
    //     list.classList.toggle("list_active");
    // else
    //     list.classList.add("list_active");
}

let content=null;



function make_num(){
    if(lotto.length==0){
        alert("로또 파일 을 먼저 열어주세요");
        return;
    }

    var out="<table class='makeTable'>";

    for(var n=1; n<=5; n++){
        let lucky_num = new Array();
        
        lucky_num.push(Math.floor(Math.random()*45)+1);
        for(var i=1; i<6;i++){
            var num = Math.floor(Math.random()*45)+1;
            if(lucky_num.indexOf(num) == -1 ){
                lucky_num.push(num);
            }else{
                i--;
            }
        }
        lucky_num.sort(function(a,b){return a-b;})

        //로또 숫자를 태그에 담아주기

        out += "<tr>";

        out+="<td class='numTd'>"+n+".</td>";
        for(var i=0; i<lucky_num.length; i++){
            out += "<td class='numTd c"+(parseInt(lucky_num[i]/10))+"'>"+lucky_num[i]+"</td>";
        }
        out += "</tr>";

        //짝,홀 갯수, 총합 
        var even=0, odd=0;  // even 짝, odd 홀
        var total=0;
        for(var i=0; i<lucky_num.length; i++){
            total += lucky_num[i];
            if( lucky_num[i]%2 === 0 ){
                even++;
            }else 
                odd++;
        }

        // 산술적 복합성 값 구하기
        var ac = new Array();
        for(var i=lucky_num.length-1; i>=1; i--){
            for(var k=i-1; k>=0; k--){
                var tmp = lucky_num[i] - lucky_num[k];
                if( ac.indexOf(tmp) == -1 )
                    ac.push(tmp);
            }
        }
        //역대 당첨 번호와 비교하기 
//lotto는 2차워배열 - 1차원 배열이 두개 있기때문에  인덱스도 두개다.
// i변수에는 첫번째 인덱스를 k 변수에는 두번째 인덱스를 표현한다.
        for(var i in lotto){ 
            for(var k=2; k<=7; k++ ){
               if( ac.indexOf(lotto[i][k]) != -1 ){
// 역대 당첨번호와 같은숫자가 ac배열에 있다면 ac배열에서 삭제하기
// 배열에 저장되어있는 데이터를 삭제하는 방법
// 1. 배열이름.pop()
// 2. 특정인덱스의 데이터를 삭제 - 배열이름.splice(인덱스,갯수)
//     삭제할 데이터의 인덱스와  해당 인덱스 부터 몇개 삭제할것인지 갯수
                   var index= ac.indexOf(lotto[i][k]);
                   ac.slice(index,1);
               }
            }
        }

        
        out += "<td colspan='7'>"+
        "AC : "+ (ac.length - 5) +" "+
        "총합 : "+total+"  "+
        "홀/짝 : "+odd+"/"+even+"</td>";

    } // 5번 반복하는 for문 끝
    out += "</table>";

    //출력
    content.innerHTML = out;
}



























/*

빙고게임 만들기 (기간 : 화요일까지)

table 로 제작하여도 되고  div 또는 ul 로 제작하여도 된다.
편한걸로 제작
5줄 5칸 만들기 , 각 칸의 너비 높이는 80px
랜덤 숫자범위는 1~50 
중복없이  25개 숫자를 화면 에 출력하기
5줄 빙고되면 게임 끝나고 더이상 진행되지않는다.


*/