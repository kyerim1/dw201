// question.js

let isLogin=false;

$(function(){
    isLogin=getCookie("isLogin")=="true"? true:false;
    var id = getCookie("id");

    var login='';
    if(isLogin){//로그인 성공
        login=`<div class="user">
        <p>${id}</p> <a href="/?part=logout">로그아웃</a>
        </div>`;
    }else{// 로그인 실패 또는 로그인 안한 상태
        login='<div class="login_bt"><a href="/login">로그인</a></div>';
    }
    $("#side").append(login);

    $.getJSON("./data/question.json",function(qdata){
        qdata.sort(function(a,b){
            if(a.date < b.date ) return 1;
            if(a.date > b.date ) return -1;
            return 0;
        });
        $.each(qdata,function(i,q){
            var ans = q.to==0?'<i class="bi bi-question-square"></i>':'<i class="bi bi-r-square-fill"></i>';
            $("#qs").append('<tr><td class="num">'+(i+1)+'</td>'+
            '<td class="title">'+q.title+'</td><td class="writer">'+q.writer+'</td>'+
            '<td class="date">'+q.date+'</td><td class="ans">'+ans+'</td></tr>');
        });
    });

    $("#word").on("keyup",function(){
        var word= $(this).val();
        $("#qs>tr").filter(function(){
            var isShow=true;
            if( !($(this).find(".title").text().indexOf(word) > -1  ||
                        $(this).find(".writer").text().indexOf(word) > -1 ) )
                isShow=false;
            $(this).toggle( isShow);
        });
    });
});
function questionWrite(){
    if(isLogin){ // 로그인 성공

    }else{ // 로그인 안한 상태
        var isOk = confirm("로그인후 문의하기 할 수 있습니다. \n로그인 하시겠습니까?");
        if(isOk){
            location.href="/login";
        }
    }
}