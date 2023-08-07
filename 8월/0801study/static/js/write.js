const cate=["all","romance","novel","poetry","proverb","diary"];
const cate_korea=["","연애소설","단편소설","시","속담","일기"];


$(function(){
    $("#keyword").on("keyup",function(){
        var word= $(this).val(); // input 입력값
        var key = $("#key").val(); // select#key 선택 값
        var target= key==="title"?"h3": key==="content"? "p" : "";

        var type = cate_korea[cate.indexOf($("#category").val())]; // 분류 선택값

        $(".story "+target).filter(function(){
            var Child = target==="h3" ? $(this) : target==="p" ? $(this).prev() : $(this).find("h3");
            var isCategory = type==="" ? true : Child.text().indexOf(type) > -1 ;

            var apply = target==="" ? $(this) : $(this).parent();
            apply.toggle(  ($(this).text().indexOf(word) > -1) && isCategory );
        });
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