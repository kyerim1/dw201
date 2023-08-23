let school=new Object(); // json 전체 데이터 저장
let swt = true;  // 차트와 목록 전환 판단 용
let std_chart='';  // 차트 객체 담아주기

const chartColor =["#A7EEFF","#65FFBA","#00CDFF","#8CF064","#66F8F0",
"#FFCAD5","#FFAAFF","#FFF064","#FFD700","#FFCB9C"];
// 변수이름, 함수이름 등등  이름을 정할때 대표적인 표기방법
//  카멜 표기법(camelCase), 스네이크표기법(snake_case)
// 카멜표기법 -  studentChartDraw
//스네이크표기법 - student_chart_draw
//케밥 표기법 - student-chart-draw
//파스칼 표기법 - StudentChartDraw

$(function(){
    $("#detail_bt").click(function(){
        $(".search_detail").slideToggle(500);
    })

    $.getJSON("./data/test5.json",function(data){

        school = data;

        var teacher= data.담임;
        $("#main_title").text(data.학교명);
        
         $.each(data.학생,function(i, std){
            var 담임="";
            for(var t in teacher){ if(teacher[t].반 == std.반){ 담임=teacher[t].이름; break;} }
            var eyes=std.시력.split(",");
            $("#list_wrap").append("<div class='info'><ul class='dt'>"+
            "<li class='name'>이름 : "+std.이름+"</li>"+
            "<li class='ban'>"+std.반+"반</li>"+
            "<li class='myteacher'> 담임 : "+담임+"</li>"+
            "<li class='t'>키 : "+std.키+"cm</li>"+
            "<li class='e'>시력 : 좌"+eyes[0]+" 우"+eyes[1]+"</li>"+
            "<li class='w'>몸무게 : "+std.몸무게+"kg</li>"+
            "</ul></div>");
         });
    });

    $("#word").on("keyup", default_search);
    $("#word").next().click(default_search);

    $(".search_detail input").on("keyup", detail_search);
    $("#cls").change(function(){
        if(swt)  //  반 을 변경했을때 detail_search함수실행 이냐 차트업데이트냐
            detail_search()
        else{
            var ban = $("#cls").val();
            std_chart.destroy();
            drawChart(ban);
        }
    }); 

    $("#chartBt").click(switchScreen);
});
function switchScreen(){
    var ban = $("#cls").val();
    if( ban==''){alert("먼저 반을 선택하세요"); return;}

    if( swt ){
        $(this).text("목록");
        $("#list_wrap").hide();
        $("#student_chart").show();
        $(".search_input").hide();
        $(".tall_range").hide();
        $(".eyes_range").hide();
        if(std_chart != '')std_chart.destroy();
        drawChart(ban);
        swt=false;
    }else{
        $(this).text("차트");
        $("#list_wrap").show();
        $("#student_chart").hide();
        $(".search_input").show();
        $(".tall_range").show();
        $(".eyes_range").show();
        swt=true;
    }
}

function drawChart(ban){
    var ctx = $("#student")[0];
// 선택한 반의 키를 구하기
    var tall=[];
    var name=[];
    var avg=0, tot=0; //전체 학생의 평균키에 사용할 변수
    $.each(school.학생,function(idx, std){
        tot += std.키;
        if(std.반==ban){
            tall.push(std.키);
            name.push(std.이름);
        }
    });
    avg = tot/school.학생.length; // 평균키

    std_chart=new Chart(ctx,{
        type:"bar",
        data:{
            labels: name,
            datasets:[
                {
                    label:ban+"반 키",
                    data:tall,
                    backgroundColor:chartColor,
                    base:avg,
                }
            ]
        },
        options:{
            scales:{
                y:{min:150,max:190}
            }
        }   
    });
}

function detail_search(){
    var minT=0, maxT=0, minE=0,maxE=0;
    minT = parseInt($("#minTall").val()==''? 0: $("#minTall").val());
    maxT = parseInt($("#maxTall").val()==''? 0: $("#maxTall").val());
    minE = parseFloat($("#minEyes").val()==''? 0: $("#minEyes").val());
    maxE = parseFloat($("#maxEyes").val()==''? 0: $("#maxEyes").val());
    
    var ban = $("#cls").val(); // 반 선택 값

    console.log(ban);

    $(".info").filter(function(){
        var isShow=true;
        if(minT != 0 ){  //  상세 검색에서 키를 입력ㄷ했다면 minT변수는 0이 아니다
            var T=parseInt( $(this).find(".t").text().slice(3) ); 
// 화면에 표시된 키는 cm단위를 가지고있는 텍스트이기때문에 parseInt를 통해 앞쪽의 숫자만 걸러온다
            if( minT > T || maxT< T )
                isShow=false;
        }
        if(minE != 0 && isShow==false){ // 키 검색 한것에 추가 검색이 되도록 할것인지  
             //  키와 시력둘중하나 검색이되게 할것인지 정해야한다.
            var text = $(this).find(".e").text();
            var temp = [ parseFloat(text.slice(text.indexOf("좌")+1)) ,parseFloat(text.slice(text.indexOf("우")+1)) ];
            var E = Math.min(...temp);
            if(minE > E || maxE < E)
                isShow=false;
            else isShow=true;
        }
        if( isShow ){
            if( $(this).find(".ban").text().indexOf(ban) == -1 )
                isShow=false;
        }
        $(this).toggle(isShow);
    });
}
function default_search(){  // 이름  만  검색
    var word = $("#word").val();

    $(".info").filter(function(){
        
        $(this).toggle( $(this).find(".name").text().indexOf(word) > -1 );
    });
}


/*
    만들어야 할것 
    차트 버튼 클릭하면 검색어입력하는input태그, 상세검색버튼, 키, 시력
    부분을 안보이게 하기  반 select만 보여야 된다.

    목록버튼을 클릭하면 다시 원상복귀 시키기

*/