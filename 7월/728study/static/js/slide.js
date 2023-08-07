$(function(){

    for(var i=1; i<=5; i++){
        $("#slide").append("<li><img src='https://loremflickr.com/1000/400?random="+i+"'></li>");
    }

    $(".left").click(function(){
        if(  parseInt($("#slide").css("left")) == 0 ) $("#slide").css("left","-5000px");
        $("#slide").animate({ left:"+=1000px"});
    });
    $(".right").click(function(){
        if(  parseInt($("#slide").css("left")) == -4000  ) $("#slide").css("left","1000px");
        $("#slide").animate({ left:"-=1000px"});
    });
});