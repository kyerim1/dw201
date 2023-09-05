<template>
<main id="main">
            <section id="content">
                <h3>스드메 회원가입</h3>
                <form name="signf" id="signf" method="get" action="/signup">
                    <div class="sign_wrap">
                        <div class="sign_input">
                            <input type="email" name="email" id="email">
                            <label for="email">이메일</label>
                        </div>
                        <div class="sign_input">
                            <input type="password" name="sdmPw" id="sdmPw">
                            <label for="sdmPw">비밀번호</label>
                        </div>
                        <div class="sign_input">
                            <select id="sdmTel1" name="sdmTel1">
                                <option value="010">010</option>
                                <option value="02">02</option>
                                <option value="042">042</option>
                                <option value="053">053</option>
                            </select>
                            <input type="tel" name="sdmTel2" id="sdmTel2">
                            <input type="tel" name="sdmTel3" id="sdmTel3">
                            <label for="sdmTel2">연락처</label>
                        </div>
                        <div class="sign_input">
                            <input type="text" name="addr" id="addr">
                            <label for="addr">신혼집 주소</label>
                        </div>
                        <div class="sign_input">
                            <input type="date" name="wDate" id="wDate">
                            <label for="wDate">결혼예정일</label>
                        </div>
                        <div class="sign_bt">
                            <a href="/signup">SIGN-UP</a>
                        </div>
                    </div>
                </form>
                <!-- 
                    회원가입 양식 만들기
                    아이디는  이메일로 ,
                    비밀번호, 연락처,  신혼집 주소,  결혼예정일
                    css 작업까지 하기  -  sign.css

                    로그인.html 은 css 작업하기
                    12시까지
                -->
            </section>
            
        </main>
</template>


<script>
export default{
    name:'SdmSign',
}
</script>

<style>
#content{
    grid-column: 1/3;
    text-align: center;
}
#content h3{
    padding:15px 0;
    font-size:30px;
}
#content .sign_wrap{
    width:700px;
    margin:0 auto;
    padding:20px 10px;
}
#content .sign_wrap .sign_input{
    display:flex;
    align-items: center;
    justify-content: start;
    padding:10px 0;
    font-size:30px;
}
#content .sign_wrap .sign_input input{
    width:30%;order:2;
    font-size:20px;
    padding:10px 10px;
}
#content .sign_wrap .sign_input select{
    order:2;
    width:20%;
    font-size:20px;
    padding:10px 10px;
}

#content .sign_wrap .sign_input input[type=tel]{
    order:3;width:20%;
}
#content .sign_wrap .sign_input input[name=addr]{
    width:72%;
}
#content .sign_wrap .sign_input #sdmTel2{margin:0 6%;}

#content .sign_wrap .sign_input label{ width:27%; text-align:left; opacity: 0.6;}
#content .sign_wrap .sign_input input:focus + label{
    opacity: 1; font-weight:800;
}
#content .sign_wrap .sign_bt a{
    background:#646EFF;
    display:inline-block;
    width:100%;
    color:#fff;
    font-size:30px;
    padding:10px 0; border-radius: 5px;
    text-decoration: none;
}

</style>