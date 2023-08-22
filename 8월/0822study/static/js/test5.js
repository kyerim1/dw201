$(function(){
    $("#detail_bt").click(function(){
        $(".search_detail").slideToggle(500);
    })

    $.getJSON("./data/test5.json",function(data){
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
    $("#cls").change(detail_search);
});
function detail_search(){
    var minT=0, maxT=0, minW=0,maxW=0;
    minT = parseInt($("#minTall").val()==''? 0: $("#minTall").val());
    maxT = parseInt($("#maxTall").val()==''? 0: $("#maxTall").val());
    minW = parseInt($("#minEyes").val()==''? 0: $("#minEyes").val());
    maxW = parseInt($("#maxEyes").val()==''? 0: $("#maxEyes").val());
    
    $(".info").filter(function(){
        var isShow=true;
        if(minT != 0 ){  //  상세 검색에서 키를 입력ㄷ했다면 minT변수는 0이 아니다
            var T=parseInt( $(this).find(".t").text().slice(3) ); 
// 화면에 표시된 키는 cm단위를 가지고있는 텍스트이기때문에 parseInt를 통해 앞쪽의 숫자만 걸러온다
            if( minT > T || maxT< T )
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