let house=new Object(); //전체 데이터 저장용

$(function(){
    $.getJSON("./data/test6.json", function(data){
        house=data; //전체 데이터 저장
        var set = new Set(); // 분류만 골라내기 위한 set
        $("#main").append('<div class="expenBox title"><h3>지출내역</h3>'+
        '<span class="categoryText">분류</span>'+
        '<span class="moneyText">금액</span>'+
        '<span class="detailText">내용</span></div>');
        $.each(house.지출,function(i,d){  // 지출 부분 화면 출력
            set.add(d.분류);
            $("#main").append('<div class="detail">'+
            '<span class="categoryText">'+d.분류+'</span>'+
            '<span class="moneyText">'+d.금액.toLocaleString()+'원</span>'+
            '<span class="detailText">'+d.내용+'</span>'+
            '</div>');
        })
        $("#main").append('<div class="incomeBox title"><h3>수입내역</h3>'+
        '<span class="categoryText">분류</span>'+
        '<span class="moneyText">금액</span>'+
        '<span class="detailText">내용</span></div>');
        $.each(house.수입,function(i,d){ // 수입 부분 화면 출력
            set.add(d.분류);
            $("#main").append('<div class="detail">'+
            '<span class="categoryText">'+d.분류+'</span>'+
            '<span class="moneyText">'+d.금액.toLocaleString()+'원</span>'+
            '<span class="detailText">'+d.내용+'</span>'+
            '</div>');
        })

        var cg = Array.from(set);  
        $.each(cg,function(i,c){   // 분류 ㅎul 태그 추가
            $("#category").append('<li><input type="checkbox" name="category" value="'+c+'">'+c+'</li>')
        });
        $("input[name=category]").change(categorySearch);
        //console.log(cg);
    });
    $("#icon").click(function(){  // 사이드 접펼
        $(this).toggleClass("open");
        $("#side").toggleClass("sideopen");
        $("#wrap").toggleClass("sideactive");
    });

    $("#word").on("keyup",keywordSearch);// input 입력
    $("#money").on("keyup",moneyBelow); // 금액 입력 부분 
    
})

function categorySearch(){
    var ctg = []; // 선택 한 분류들 저장 할 배열

    $("input[name=category]:checked").each(function(){
        ctg.push($(this).val());
    });
    
    $(".detail").filter(function(){
        var isShow=true; 
        //배열에 존재하는 값인지 아닌지 확인 하는 방법은?
        var text = $(this).find(".categoryText").text();
        // 전체 글에서 분류 적힌 부분 찾기
        if( ctg.indexOf(text) == -1 && ctg.length!=0) isShow=false;
        $(this).toggle(isShow);
    });

}

function moneyBelow(){
    var moneyB= $(this).val();//입력한 금액 가져오기
    if(moneyB !=''){  // 금액 입력했다면
        $(".detail").filter(function(){ // 필터처리
            var isShow=true;
            var m = $(this).find(".moneyText").text().replace("원","").replace(/,/g,"");
            //나는 화면에 천단위콤마 해놓아서 ,제거 하는거까지 한것
            if( Number(moneyB) < Number(m) ) isShow=false;
            $(this).toggle( isShow );
        });
    }
}

function keywordSearch(){
    var word = $(this).val(); // input 입력값 가져오기
    
    $(".detail").filter(function(){ // 필터 처리

        $(this).toggle( $(this).text().indexOf(word) > -1);
    });
}


function showList(){
    $("#main").show();
    $("#mychart").hide();
}
let house_chart='';
let houseColor=["#A7EEFF","#65FFBA","#00CDFF","#8CF064","#66F8F0",
"#FFCAD5","#FFAAFF","#FFF064","#FFD700","#FFCB9C"];
let incomeColor=["#FFCB9C","#FFD700","#FFF064","#FFAAFF",
"#FFCAD5","#66F8F0","#8CF064"];
function showChart(){
    $("#main").hide();
    $("#mychart").show();
    if(house_chart ==''){ // 차트가 이미 그려졌다면 실행 안하기
        var ctx = $("#mycanvas")[0];

// 분류와 분류별 금액 총액 구하기 를 하겠습니다.
var setE = new Set(); //지출 분류   
var totalE=new Array(); // 지출 분류 별 총금액
        $.each(house.지출, function(idx, data){
            var 분류 = data.분류;
            var 금액 = Number(data.금액);
            if( setE.has(분류) ){ //set에 해당분류가 저장되어있다면 true
                totalE[분류] += 금액;  // 분류 별 금액 누적
            }else{
                totalE[분류]=금액; 
            }
            setE.add(분류);
        });
        house_chart = new Chart(ctx,{plugins:[ChartDataLabels],
            type:"pie",
            data:{
                labels:Array.from(setE),
                datasets:[
                    {
                        data: Object.values(totalE),
                        backgroundColor:houseColor,
                    }
                ]
            },
            options:{
                plugins:{
                    title:{
                        display:true,
                        text:"지출",
                        font:{size:20,}
                    },datalabels:{
                        formatter:function(value,context){ 
                            var idx = context.dataIndex;
                            var lb = context.chart.data.labels[idx]; //해당 데이터 이름
    
                            var total = context.chart.getDatasetMeta(0).total;
    
                            return Math.round(value/total*100)+"%";
                        },
                        backgroundColor:"#222845",
                        borderRadius:"5",
                        padding:7,
                        color:"white",
                        align:"start", //start, end, center, right, left, bottom,top
                        anchor:"end", // center, start, end
                        font:{
                            size:"15px"
                        },
                    },
                }
            }
        });
        var ctx = $("#incomeChart")[0];

// 분류와 분류별 금액 총액 구하기 를 하겠습니다.
var setI = new Set(); //지출 분류   
var totalI=new Array(); // 지출 분류 별 총금액
        $.each(house.수입, function(idx, data){
            var 분류 = data.분류;
            var 금액 = Number(data.금액);
            if( setI.has(분류) ){ //set에 해당분류가 저장되어있다면 true
                totalI[분류] += 금액;  // 분류 별 금액 누적
            }else{
                totalI[분류]=금액; 
            }
            setI.add(분류);
        });
        house_chart = new Chart(ctx,{plugins:[ChartDataLabels],
            type:"pie",
            data:{
                labels: Array.from(setI),
                datasets:[
                    {
                        data: Object.values(totalI),
                        backgroundColor:incomeColor,
                    }
                ]
            },options:{
                plugins:{
                    title:{
                        display:true,
                        text:"수입",
                        font:{size:20,}
                    },datalabels:{
                    
                        formatter:function(value,context){ 
                            var idx = context.dataIndex;
                            var lb = context.chart.data.labels[idx]; //해당 데이터 이름
    
                            var total = context.chart.getDatasetMeta(0).total;
    
                            return Math.round(value/total*100)+"%";
                        },
                        backgroundColor:"#222845",
                        borderRadius:"5",
                        padding:7,
                        color:"white",
                        align:"start", //start, end, center, right, left, bottom,top
                        anchor:"end", // center, start, end
                        font:{
                            size:"15px"
                        },
                    },
                }
            }
        });
    }
}