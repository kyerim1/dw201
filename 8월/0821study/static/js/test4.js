$(function(){
    $.getJSON("./data/test4.json",function(data){
        $.each(data.diary,function(i,item){
            var color = item.날씨.indexOf("맑음")>-1 ? "blue" :
            item.날씨.indexOf("흐림")>-1 ? "gray" : "yellow";

            $("#search_result").append("<div class='result_card'>"+
            "<p class='date'>"+item.작성일+"</p>"+
            "<p class='title'>"+item.제목+"</p>"+
            "<p class='wt "+color+"'>"+item.날씨+"</p>"+
            "<p class='detail'>"+item.내용+"</p>"+            
            "</div>");
        });

    });
});