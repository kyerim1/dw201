const category=["편의점","카페","음식점","문화생활","여행","교통","마트",
"관리비","세금","온라인쇼핑","경조사","기부","교육","의료","유흥","미용","통신비",
"급여","기타수입","로또"];


const card=[{ name:"우리체크카드", bank:"woori" },
{ name:"국민체크카드", bank:"kb" },
{ name:"농협체크카드", bank:"nh" },
{ name:"카카오체크카드", bank:"kakao" }];

const bank =[{ name:"우리은행", bank:'woori', money:123000 },
{ name:"국민은행", bank:'kb', money:89000 },
{ name:"농협", bank:'nh', money:30000 },
{ name:"카카오뱅크", bank:'kakao', money:5890000 }];

function house(date, money, category, detail, way,getcome , balance ){
    this.date=date; // 날짜
    this.money=money; //금액
    this.category=category;//분류
    this.detail=detail;// 내역
    this.way=way; // 방식- 현금,계좌(어디은행?),카드(어디카드?)
    this.getcome=getcome; // 수입이냐 지출이냐 그것이 문제로다
    this.balance=balance;//잔액
}
house.prototype.won=function(){ // 돈을 천단위로 콤마를 찍어주고 그리고나서 말이지 앞에 ￦이거 표시
    return "￦ "+this.money.toLocaleString();
}
house.prototype.getWay=function(){// 수입이든 지출이든 현금은 그냥현금이고 계좌와 카드는 어디인지
    return this.way.split("-").length >1 ? this.way.split("-")[1] : this.way;
}