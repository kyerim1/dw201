<!--  SignUp.vue-->
<template>
    <div class="signup">
        <p>회원가입</p>
        <input type="text" v-model="email" placeholder="email"><br>
        <input type="password" v-model="password" placeholder="password"><br>
        <button v-on:click="signup">가입하기</button>
        <span><RouterLink to="/login">로그인</RouterLink>으로 돌아가기</span>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router'
import firebase from 'firebase'
export default{
        name:'signUp',
        data() {
            return { email:'', password:''  }
        },
        methods:{
            signup(){
                firebase.auth().createUserWithEmailAndPassword(this.email,this.password)
                .then(
                    function(user){
                        alert('회원가입완료')
                    },
                    function(err){
                        alert('에러 : '+err.message)
                    }
                )
            }
        }
    }
</script>

<style>

</style>