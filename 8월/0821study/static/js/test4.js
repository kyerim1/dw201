$(function(){
    $.getJSON("./data/test4.json",function(data){
        $.each(data.diary,function(i,item){
            var color = item.날씨.indexOf("맑음")>-1 ? "blue" :
            item.날씨.indexOf("흐림")>-1 ? "gray" : "yellow";

           // var date = item.작성일.slice(0,4)+"-"+item.작성일.slice(4,6)+"-"+item.작성일.slice(6);

            $("#search_result").append("<div class='result_card'>"+
            "<p class='date'>"+item.작성일+"</p>"+
            "<p class='title'>"+item.제목+"</p>"+
            "<p class='wt "+color+"'>"+item.날씨+"</p>"+
            "<p class='detail'>"+item.내용+"</p>"+            
            "</div>");
        });
    });

    $("#searchDate").change(search);
    $("input[name=weather]").click(search);
});
function search(){
    
    var sDate = $("#searchDate").val().split("-").join(""); // -> 2023 , 08, 09
    var sWeather=$("input[name=weather]:checked").val();

    $(".result_card").filter(function(){
        var classDate = $(this).children(".date");
        var classWt = $(this).children(".wt");

        var hasDate = sDate==''?false:classDate.text().indexOf(sDate) > -1;
        var hasWeather = sWeather=='undefined'?true:classWt.text().indexOf(sWeather) > -1;
        
        $(this).toggle(hasDate || hasWeather);
        //console.log(hasDate);
    });
    
}