<template>
<main id="main">
            <section id="content">
                <h3>스드메 with Seonhyang 로그인</h3>
               <div class="login_wrap">
                    <form name="loginf" id="loginf" method="get" action="/">
                        <input type="hidden" name="part" value="login_check">
                        <div class="login_box">
                                <div class="login_input">
                                    <input type="text" name="sdmId" id="sdmId">
                                    <label for="sdmId">ID</label>
                                </div>
                                <div class="login_input">
                                    <input type="password" name="sdmPw" id="sdmPw">
                                    <label for="sdmPw">PW</label>
                                </div>
                                <div class="login_bt">
                                    <a href="javascript:login();">LOGIN</a>
                                </div>
                        </div>
                    </form>
                    <div class="joinAfind">
                        <p class="find">아이디/비밀번호 찾기</p>
                        <p class="join"><a href="/sign">회원가입</a></p>
                    </div>
               </div>
            </section>
        </main>
</template>

<script>
    export default {
        name:'SdmLogin',
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
#content .login_wrap{
    width:400px;
    margin:0 auto;
    padding:20px 10px;
}
#content .login_wrap .login_box{
    padding:10px 0;
}
#content .login_wrap .login_input{
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding:10px 0;
    font-size:30px;
}
#content .login_wrap .login_input input{
    width:85%;order:2;
    font-size:20px;
    padding:10px 10px;
}
#content .login_wrap .login_input label{opacity: 0.6;}
#content .login_wrap .login_input input:focus + label{
    opacity: 1; font-weight:800;
}
#content .login_wrap .login_bt a{
    background:#646EFF;
    display:inline-block;
    width:100%;
    color:#fff;
    font-size:30px;
    padding:10px 0; border-radius: 5px;
    text-decoration: none;
}
#content .login_wrap .joinAfind{
    display:flex;
    justify-content: space-between;
}
#content .login_wrap .joinAfind a{
    text-decoration: none;
}
</style>