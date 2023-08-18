

$(function(){
    $("#open").click(function(){
        $(this).toggleClass("reg");
        if( $(this).hasClass("reg")){
             $(this).text("등록");
             $("#stock_data").show();
        }else{
             $(this).text("입력");
             $("#stock_data").hide();
        }
    });
});