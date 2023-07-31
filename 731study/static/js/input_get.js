
//  document.getElementById("imageName").value;

// append -  선택 한 태그의 마지막에 추가
// prepend - 선택한 태그의 처음에 추가
// before - 선택한 태그의 앞쪽에 추가
// after - 선택한 태그의 뒤쪽에 추가


$(function(){
    $("#setImage").click(function(){
        var data = $("#imageName").val();
        
        $("#gallery").append("<img src='"+data+"'>");
    });
});