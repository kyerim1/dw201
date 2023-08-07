// func.js

//함수의 형태 4가지
// 입력과 출력이 없는 형태
// 입력은 있고 출력이 없는 형태
// 입력은 없고 출력만 있는 형태
// 입력과 출력이 있는 형태

// 함수에서 입력이라는 것은 함수의 내용이 실행되기
// 위해서 꼭 필요한값이 있다면 함수외부로부터 
// 값을 받는것을 입력 이라고 한다.
// 전문 용어로  인자 인수  ,  매개변수  라고 한다.

// 함수에서 출력은 함수에서 생성된 값을  다른함수나
// 다른 곳에 보내고자 할경우에 사용된다.
//  return 을 사용해서 밖으로 내보낸다.


function sum(a,b){ // a=10, b=20
    var res= document.getElementById("sum_result");
    res.innerHTML=a+b;
}


//  웹에서 입력하는 모든값은 전부 텍스트이다.
// input 태그에 입력한 값을 자바스크립트로 가져오려면
// value로 속성을 사용해야한다.
// 모든 input태그에 값은 value에 저장되어있다.
// getElement를 통해서 input 태그를 가져오고
// 가져온 input 태그에서 value값을 뽑아내기

function plus(){
    var n1= document.getElementById("num1");
    var n2=document.getElementById("num2");
    var res = document.getElementById("result2");

    res.innerHTML = Number(n1.value)+ Number(n2.value);
    //res.innerHTML = Number(n1.value) + parseInt(n2.value);
}

function myage(){
    var year = document.getElementById("birth_year").value;
    var print = document.getElementById("age");
    print.innerHTML = 2023-Number(year);
}

// return  - 함수에 있는 값을 함수 밖으로 내보낼대 사용된다.
// 함수 안에서 return이 실행되면 해당 함수를 종료 하고  값을 내보낸다.

function score_calc(){
    var kor = document.getElementById("kor");
    var mat = document.getElementById("mat");
    var music = document.getElementById("mus");

    var res = document.getElementById("result3");

    if(kor.value=='' || !(kor.value>=0 && kor.value <=100) ){
        alert("국어 점수 입력해라!");
        kor.focus();
        return; 
    }else if( mat.value==''){
        alert("수학 점수 입력안했는데?");
        mat.focus();
        return;
    }else if( music.value==''){
        alert("음악 점수 빵점이냐?");
        music.focus();
        return;
    }

    var tot = total(Number(kor.value), Number(mat.value), Number(music.value));  // total이라는 함수 호출(실행)
    var avg_val = avg(tot);

    res.innerHTML="총점 : "+tot+"  평균 : "+avg_val;
}

function avg(tot){  // avg.tot = score_calc.tot
     return tot/3;
}

function total(k, m, s){
     return (k+m+s);
}

function my_minus_life(){
    var soju=document.getElementById("soju");
    var min = document.getElementById("minute");
    var hour = document.getElementById("hour");
    var day = document.getElementById("day");

    if( soju.value==''){
        alert("몇잔 마셨는지 입력하세요... 혹시 소주안먹어?");
        soju.focus();
        return;
    }
    var life = Number(soju.value) * 2 ;
    life = life * 365 * 20;

    min.innerHTML= "단축수명 : "+life+"분";
    hour.innerHTML="단축수명 : "+(life/60)+"시간";
    day.innerHTML = "단축수명 : "+(life/60/24)+"일";
}
// switch 문은  if문 과 다르게 조건식이 참이냐 거짓이냐에 따라 
// 동작하는 조건문이 아니다.
// switch문은 값을 넣어서 해당 값에 따라 동작하도록 선택 하는 문이다.
// 즉 여러분이 지금 사용하고 있는 vscode의 메뉴가 바로 siwthc문으로
// 만들어진것이다.  메뉴에서 내가 폴더열기를 선택하면 탐색창이 실행된다.
// 즉 내가 선택한 메뉴에 따른 동작을 하는것이다. 
// switch문에서 동작할 내용 선택은 case로 만들어준다.
// 여러개의 case를 만들수 있다.
/*
    switch(10){
        case 1:
            1을 선택하면 동작할내용
        case 5:
            5를 선택하면 동작할내용
        case 100:
            100을 선택하면 동작할내용
        case 2:
            2를 선택하면 동작할내용
        case 10:
            10을 선택하면 동작할내용
    }
*/
function my_order(){
    var main_menu = document.getElementById("night_snack");
    var side_menu=document.getElementById("side_menu");
    var alc = document.getElementById("alc");

    //출력엘리먼트
    var order_list = document.getElementById("order_result");

    var out="";
    var temp=menu(main_menu.value); // 메뉴입력시 판매 하는 메뉴입력하면
    // 금액(숫자)이 return되고 , 판매하지않는 메뉴입력시 문자열이 return된다.
    
    out +=  main_menu.value +" 금액 : "+temp+"원<br>";

    var temp1 = menu(side_menu.value);
    out += side_menu.value+" 금액 : "+temp1+"원<br>";

    var temp2 = menu(alc.value);
    out += alc.value+" 금액 : "+temp2+"원<br>";
    
    if( typeof(temp) === 'string' || typeof(temp1)==='string' || typeof(temp2)=='string'){ //temp의 값 타입이 문자열이라면
        alert("판매하지 않는 메뉴입니다.");
        main_menu.value=''; //  <- 요렇게 해주면 야식메뉴 input의 값이 지워진다.
        side_menu.value='';//  <- 요렇게 해주면 사이드메뉴 input의 값이 지워진다.
        alc.value='';//  <- 요렇게 해주면 주류 input의 값이 지워진다.
        main_menu.focus();
        return;
    }
    order_list.innerHTML = out;

    
}

function menu(name){  // name=족발
    var money=0;
    switch(name){
        case "족발":
            money=28000;
            break;  // switch case에서 break를 하지않으면 
                    //  밑에있는 case도실행된다.
        case "반반치킨":
            money=22000;  break;
        case "무뼈닭발":
            money=19000; break;
        case "페페로니피자": money=18000; break;
        case "짬뽕탕": money=18000; break;
        case "포케": money=15000; break;
        case "감자튀김": money=3000; break;
        case "염통꼬치": money=4000; break;
        case "타코야끼": money=6000; break;
        case "치즈볼": money=5000; break;
        case "테라":money=4000; break;
        case "피치하이볼": money=8000; break;
        case "진로": money=4000; break;
        case "새로주": money=4000; break;
        case "카스": money=4000; break;
        case "발렌타인30살": money=1100000; break;
        case "시바스리갈": money=59800; break;
        default: // case에 없는 값 입력시 default가 실행된다.
            return "판매하지 않는 메뉴입니다.";
    }
    return money;
}



/*
    오늘의 과제 

    계림 카페 주문하기

    주문내용은   음료명,  아이스 또는 핫 ,  사이즈(m ,L )

    음료 하나만 주문이 아니라  여러개 주문내역이 나와야한다.

    예)
    아메리카노 , 아이스 , M  - 2000원
    수박주스, 아이스 , M - 4500원

    힌트 - 모든 함수에서 사용할수있는 변수를 생성하려면  함수 밖에 만들면 된다.
    

*/
