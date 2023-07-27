// household_function.js

//여기는 전역변수 정의한 곳입니다.

let isIncome=false; // 수입 이냐 지출이냐  false면 지출 , true면 수입
let way="";  // 현금이냐 계좌냐 카드냐
let keep=new Array(); // 가계부 내역 객체가 저장될 배열

// 전역변수 정의 한곳 끝

function two_digit(num){
    return  num<10 ? "0"+num : num ;
}

window.onload=function(){
    var today = new Date();
    var year = today.getFullYear(); //년도
    var month = two_digit(today.getMonth()+1); //월
    var date = two_digit(today.getDate());  // 일
    var hour = two_digit(today.getHours()); //시간
    var minute = two_digit(today.getMinutes()); //분
    
    var wdate = document.querySelector("#wdate");
    wdate.value=year+"-"+month+"-"+date+" "+hour+":"+minute;

    var cate = document.querySelector("#wcategory");

    for(var i=0; i<category.length; i++){
        var opt = document.createElement("option");
        opt.setAttribute("value",category[i]);
        opt.innerText=category[i];
        cate.appendChild(opt);
    }

    var mycard= document.querySelector("#mycard");
    for(var i in card){
        var opt = document.createElement("option");
        opt.setAttribute("value",card[i].bank);
        opt.innerText=card[i].name;
        mycard.appendChild(opt);
    }

    var mybank= document.querySelector("#mybank");
    for(var i in bank){
        var opt = document.createElement("option");
        opt.setAttribute("value",bank[i].bank);
        opt.innerText=bank[i].name;
        mybank.appendChild(opt);
    }
//결제방법 중에서  카드 선택이냐 현금 선택이냐
    var payment = document.getElementsByName("payment");
    payment[0].addEventListener("click",function(){
        way="현금";
        document.querySelector('#mycard').classList.add("hide");
    });
    payment[1].addEventListener("click",function(){ 
        document.querySelector('#mycard').classList.remove("hide");
        way="카드";
    });
// 수입 중에서  은행 입금이냐 현금 받았냐
    var income_method = document.getElementsByName("income_method");
    income_method[0].addEventListener("click",function(){
        document.querySelector('#mybank').classList.remove("hide");
        way="계좌";
    });
    income_method[1].addEventListener("click",function(){ 
        document.querySelector('#mybank').classList.add("hide");
        way="현금";
    });

 //수입 버튼클릭시
    var income_bt = document.querySelector("#income_bt");
    income_bt.addEventListener("click",function(){
        var ex = document.getElementsByClassName("expense")[0];
        var inc = document.getElementsByClassName("income")[0];
        ex.classList.add("hide");
        inc.classList.remove("hide");
        isIncome=true; // 수입 클릭했으니까
    })

    //지출버튼클릭시
    var expense_bt = document.querySelector("#expense_bt");
    expense_bt.addEventListener("click",function(){
        var ex = document.getElementsByClassName("expense")[0];
        var inc = document.getElementsByClassName("income")[0];
        ex.classList.remove("hide");
        inc.classList.add("hide");
        isIncome=false; // 지출 클릭했으니까
    });


    // 등록 버튼 클릭시
    document.querySelector("#write_bt").addEventListener("click", add);
}

function add(){
    var wday = document.querySelector("#wdate").value;  // 선택한 날짜
    wday = wday.split("T")[0]+" "+wday.split("T")[1];
    var money = document.querySelector("#wmoney").value; // 입력한 금액
    var cate = document.querySelector("#wcategory"); 
    cate = cate.options[cate.selectedIndex].value;   //선택한 분류
    var detail = document.querySelector("#wdetail").value; //입력한 내용
    if(way!="현금"){  // 계좌나 카드를 선택했다면
        if(isIncome){  // 수입을 선택했다면
            var mybank = document.querySelector("#mybank");
            way += "-"+mybank.options[mybank.selectedIndex].value;
        }else{
            var mycard = document.querySelector("#mycard");
            way += "-"+mycard.options[mycard.selectedIndex].value;
        }
    }
    var balance = account_update(parseInt(money)); //통장 잔액 변동 

    keep.push( new house(wday,money,cate, detail, way, isIncome?"수입":"지출", balance )  );

    var tbody="";
    if( keep.length<=20)
        tbody=document.getElementById("left_t");
    else
        tbody=document.getElementById("right_t");

    var index = keep.length-1;
    console.log(keep[index]);
    var tr = document.createElement("tr");
    var td ="<td>"+keep[index].date+"</td><td>"+(keep[index].getcome=='수입'?keep[index].won():'')+"</td>"+
    "<td>"+(keep[index].getcome=='지출'?keep[index].won():'')+"</td><td>"+keep[index].detail+
    "</td><td>"+keep[index].category+"</td><td>"+keep[index].getWay()+"</td>";

    tr.innerHTML=td;
    tbody.appendChild(tr);
}

function account_update(money){
    if(way==="현금") return;
    var use_bank = way.split("-")[1];
    for(var i=0; i<bank.length; i++){
        if( bank[i].bank=== use_bank ){  // 사용한 은행 찾기
            if(isIncome)
                return bank[i].money += money;
            else
                return bank[i].money -= money;
        }
    }
}
