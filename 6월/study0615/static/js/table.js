function init(){
    out="";
    op="";
    num1=num2=0;
    document.getElementById("result").value="";
}
// 1. 전역 변수와 지역변수차이를 알아보겠습니다.
// 2. 두개의 함수를 통해 전역과 지역사용 비교
// 3. 

// 그렇다면 여기에서 문제! 간단한거!
//  숫자나 연산자를 클릭하면 input 태그에 출력시키기! 
// 클릭한 숫자나 연산자가 input 태그에 계속 나오게 만들기
// 하려면  어떻게 해야할까요????
//  이작업을 위해서 필요한 변수는 지역? 전역? 

let out=""; //전역변수 - 내가 클릭한 숫자나 연산자를 쌓아두기위해서
           //  전역변수가 아니고 지역변수로 생성시 클릭할때마다 새로운
           // 지역변수가 생성된다.  이전에 클릭했던 내용은 사라진다.
let op=""; //연산자 를 저장할 전역변수
           // 전역으로 만드는 이유는  연산자 입력후  두번째 숫자를 입력하기때문에
           // 연산자를 함수의종료와 함께 날려버리면 안되니까
let num1=0; //첫번재 피연산자
let num2=0;// 두번째 피연산자

function select(val){
    if(val==="="){ // 계산 결과를 보기위해 = 클릭했을경우 실행되는 if문
        out = calc(); // 계산하기 위한 함수, 계산된 결과를 반환(return)할것이다.
    }else{
        out = out + val;

        if(typeof(val)==='string'){ //val변수의 값이 문자열인지 확인(연산자 클릭한경우)
            op=val;
            //alert("연산자입니다.");
        }
        if( op === ""){ // op변수가 빈값이면 연산자를 클릭하기 전이다.
            num1 = Number(out); // 첫번째 숫자는 연산자를 
            // 클릭하기 전까지가 첫번째 피연산자이다. 연산자 클릭한 이후부터는
            // 두번째 피연산자 숫자가 들어와야 한다.
            // 연산자 이전과 이후가 구분이 되야 피연산자1 과 피연산2 로 나누어줄수 있다.
        }else{ // op변수가 빈값이 아니라면 두번째 피연산자가 입력될것이다.
            var index = out.indexOf(op)+1;
            num2 = Number( out.slice(index));
        }
    }
    document.getElementById("result").value=out;
}


function calc(){
    switch(op){
        case "+":
            return num1=num1+num2;
        case "-":
            return num1=num1-num2;
        case "*":
            return num1=num1*num2;
        case "/":
            return num1=parseInt(num1/num2); //  / 연산은 소수점도 나오니까 정수만
                                       // 나오게 하기위해 parseInt
    }
}


//  7+8 하고  = 클릭하면  15가 출력된다.
// 15에  + 클릭하고 4를 클릭하면  19가 나오게 하려면 어떻게 해야할까?
//  해결하시오!