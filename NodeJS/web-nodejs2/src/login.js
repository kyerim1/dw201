function login(){
    if( $("#sdmId").val()=='' ){
        alert("아이디를 입력하세요");
        $("#sdmId").focus();
    }else if( $("#sdmPw").val()==''){
        alert("비밀번호를 입력하세요");
        $("#sdmPw").focus();
    }else{
        $("#loginf").submit(); // form 태그의 action으로 주소 이동
    }

}