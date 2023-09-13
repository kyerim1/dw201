<template>
    <div class="login">
        <h3>Login</h3>
        <input type="text" v-model="email" placeholder="email"> <br>
        <input type="password" v-model="password" placeholder="password"><br>
        <button v-on:click="login">로그인</button>
        
        <p>만약 계정이 없다면 , <RouterLink to="/signup">회원 가입</RouterLink >을 먼저 진행해주세요</p>
    </div>
</template>

<script>
import { RouterLink, useRouter } from 'vue-router'
import firebase from 'firebase'
import { collection, addDoc } from "firebase/firebase-firestore"; 
import { initializeApp } from "firebase/firebase-app";
const firebaseConfig = {
    apiKey: "AIzaSyAWHOW-US4jKBcLLtczKEFyZ2SBg6BZzPc",
    authDomain: "iloveschool-f6efc.firebaseapp.com",
    projectId: "iloveschool-f6efc",
    storageBucket: "iloveschool-f6efc.appspot.com",
    messagingSenderId: "70645106048",
    appId: "1:70645106048:web:078502189019f67bf0ad65",
    measurementId: "G-4TRGP0LV75"
  };
  const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
try {
                const docRef = await addDoc(collection(db, "users"), {
                    first: "Ada",
                    last: "Lovelace",
                    born: 1815
                });
                console.log("Document written with ID: ", docRef.id);
                } catch (e) {
                console.error("Error adding document: ", e);
                }
const router = useRouter();

var provider = new firebase.auth.FacebookAuthProvider()
provider.addScope('public_profile')
provider.setCustomParameters({
    'display':'popup'
})

const sessionStorage = window.sessionStorage

    export default{
        name:'login',
        data() {
            return { email:'', password:''  }
        },
        methods:{
            login(){
                firebase.auth().signInWithEmailAndPassword(this.email,this.password)
                .then( (user) => {
                    //빠르게 인증 작업 합시다.
                    // 어제 마지막에 한 session은 버리고 다른 session 으로
                    // 무설치 로 할 수 있지만 단점이 한가지 있습니다. 
                    // 단점을 보완하기 위해서 axios 같은걸 사용해야한다.
                    sessionStorage.setItem('user_id', user.user.id);
                    this.$router.replace('msg');
                } ).catch( (err) => {
                    alert('에러 : ' + err.message)
                })

            },
        },
    }
</script>

<style scoped>
    .login{
        margin:0 auto;
        display: flex;
        flex-direction: column;
    }
    .login input {
        height:30px;
        padding:5px 15px;
    }
    .login button{ height:30px;}

    .facebook{width:200px; height:50px; border:0; background:#fff;}
    .facebook img{
        width:100%;
    }
</style>