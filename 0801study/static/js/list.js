
$(function(){
    $("#keyword").on("keyup",function(){
        var word = $(this).val();
        $(".data img").filter(function(){
            var isSearch=$(this).attr("alt").indexOf(word) > -1;
            $(this).parent().toggle(isSearch);
        });
    })
})