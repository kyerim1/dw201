const cate=["all","romance","novel","poetry","proverb","diary"];
const cate_korea=["전체","연애소설","단편소설","시","속담","일기"];


$(function(){
    $("#keyword").on("keyup",function(){

    });
    
    $("#category").on("change",function(){
        var idx = cate.indexOf($(this).val());
        $(".story h3").filter(function(){
            if(idx==0) $(this).parent().show();
            else
            $(this).parent().toggle($(this).text().indexOf(cate_korea[idx]) > -1);
        });
    });
});