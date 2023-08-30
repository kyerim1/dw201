// question.js
$(function(){
    var isLogin=getCookie("isLogin")=="true"? true:false;
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
});