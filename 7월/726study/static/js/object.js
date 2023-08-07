/*
    객체란 무엇인가?? 
    객체는 선향이다.
    객체는 상수다.
    객체는 은선이다.
    객체는 선향이 핸드폰이다.
    객체는 상수 이어폰이다.

    객체는 무엇이든지 객체일수 있다. 

    선향이라는 객체는 이름이라는 속성의 값이  김선향이고
    나이라는 속성의값이 33이고,  성별이라는 속성이 남자 일 수 있다.
    
    커피라는 객체 이름:아메리카노,  원두: 케냐,  용량 : 1L 
    커피라는 객체 이름:콜드브루 ,  원두:콜롬비아 ,용량: V 
    사람은 객체이다.
    사람객체 이름 : 신상수, 나이 : 37
    사람객체 이름 : 송은선, 나이 : 21

    div 라는 객체  id:box , color: pink, 너비 :  300, position:fixed 
    div 라는 객체  id: box1, color: red, 너비 : 400, 포지션:absolute;

    div 객체 class:a , color: blue
    div 객체 class:a , color: blue 

*/

let 선향 = new Object();  //객체생성
선향.나이=33; // 선향이라는 객체에 나이라는 속성과 값으로 33 저장
선향.이름="김선향"; //선향이라는 객체에 이름이라는 속성과 값은 김선향 저장
선향.키=152;
선향.몸무게=59;
선향.시력=2.5; 
//객체는 object또는 객체라고 부른다.
// 속성은  attribute라고 한다. (영어로 ), 값은 value

let pen = new Object();
pen.name="삼색볼펜";
pen.color="red,blue,black";
pen.made="korea";
pen.company="향수";

function sum(a,b){
    document.write(a+b);
}

sum(10,20);
sum(30,1000);

//객체 생성 3번째 방법
const baby = { 
    firstname:"신" , 
    lastname:"향선",
    age : 2
};



//객체 생성 2번째 방법

function person(name,age,addr){  //함수생성방법을 이용하여 객체를 만드는방법 - 생성자 함수
    this.name=name;
    this.age=age;
    this.addr=addr;
    // this.output=function(){
    //     document.write("<br>"+this.name+" 너는  할 수 있다.");
    // }
}
person.prototype.group="201호";
person.prototype.output=function(){
    document.write("<br>"+this.name+" 너는  할 수 있다.");
}

var div = document.getElementById("box");

div.prototype.out=function(){

}
// 함수-->  메서드
// 함수 - 독립적으로 실행되는 코드의 집합체
// 메서드 - 객체에 귀속되어 객체에 의해 실행되는 코드의 집합체
// 객체에 메서드를 정의하면  모든 객체에 메서드가 생성된다.
// 객체가 100개라면  메서드도 100개 된다.
// 문제점. 모든객체의 속성의 값은 다르지만 메서드의 내용은 동일 하다.
//         동일한 내용의 메서드를 다수 생성하여 사용하는 방법은 비효율적이다.
//         컴퓨터의 메모리 공간만 쓸데없이 차지한다.
//    해결책 .  메서드를 하나만 생성이 되도록 만든다.  
//             객체를 1000개 생성해도 메서드는 1개만 존재하게 만든다.
// 그래서  자바스크립트를 다른 말로 프로토타입 기반언어라고 한다.


const p = new Array();
p.push( new person("신상숭",27,"동구") );
p.push( new person("김숭향",23,"동구") );
p.push( new person("송은상",31,"서구") );


window.onload=function(){
    document.write( p[0].name );
    document.write(p[1].name);
    p[0].output();
    p[2].output();
};


