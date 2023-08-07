
function getId(id){
    return document.getElementById(id);
}

let out="";  //전역변수 -어디에도 속하지 않은 변수
             // var 타입은  재선언이 가능하지만  let타입은 재선언이 불가하다.
/*
    var a=10;  
    var a=40;  
    let b=20;
    let b=30; 오류
    var 타입은 변수를 재생성 할수 있지만 let는 재생성이 안되는 타입이다.
*/

function order(){   
    var drink = getId("drink");
    var tmp = getId("ice_hot");
    var size = getId("size");

    var total = drink_menu(drink.value);
    //음료에 대한 금액 구하기- drink_menu라는 함수를 통해 금액을 구한다.
    if(total==0){//판매하지 않는 메뉴 입력시
        alert("판매하지않는 메뉴입니다.");
        drink.value=''; // 음료명 input 값 비워주기
        drink.focus();
        return;
    }   

    // 아이스냐 핫이냐  
    // 알파벳을 소문자로변환 - toLowerCase()
    // 알파벳을 대문자로변환 - toUpperCase()
    if( !(tmp.value.toLowerCase()==="ice" || tmp.value.toLowerCase()==="hot") ){
        alert("ice 또는 hot 이라고 입력하세요");
        tmp.value='ice';
        tmp.focus();
        return;
    }

    //사이즈 M이냐  L이냐  아니면 잘못입력했냐?
    if( !(size.value.toLowerCase()==="m" || size.value.toLowerCase()==="l") ){
        alert("M 또는 L 사이즈를 입력하세요");
        size.value="M";
        size.focus();
        return;
    }
    total = total + ( size.value.toLowerCase()==='m' ? 0: 1000);
    // 사이즈가 m이라면 0원, l 이라면 1000원 

    out += drink.value + " / " + tmp.value + " / " +size.value +" : "+total+"원<br>";

    getId("list").innerHTML=out;

    //함수안에 생성된 변수는 함수가 종료 되면 제거 된다.
    // 즉, 함수안에서 생성한 모든변수는 다시 재사용 안되고  함수 실행될때마다
    //  초기화 되서 사용된다.  
    // 함수의 밖에 변수를 생성하면  함수의 생명주기(실행, 종료) 와 상관없이
    // 변수의 값을 유지 할 수 있다.
    // 이런 변수를 전역 변수라고 한다.



}

function drink_menu(drink){
    switch(drink){
        case "아메리카노": return 2000;
        case "카페라떼" : return 3000;
        case "돌체라떼" : return 4500;
        case "모카라떼" : return 3000;
        case "수박주스" : return 4500;
        case "바나나주스" :return 4500;
        default: return 0;
    }
}