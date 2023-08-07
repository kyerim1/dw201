
$(function(){
    // input 태그에 키보드를 눌렀다가 떼는 경우에 동작 - keyup
    // input 태그에 키보드를 눌렀을때 동작 - keydown
    $("#search_word").on("keyup",function(){
        var word = $(this).val();
        $("#mydata tr").filter(function(){
            $(this).toggle($(this).text().indexOf(word) > -1);
        });
    });
})