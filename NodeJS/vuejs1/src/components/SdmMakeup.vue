<template>
    <main id="main">
        <section id="content">
            <h1>신부화장</h1>
            <ul class="makeUpList">
                <li v-for="makeUp in makeUpItem" :key="makeUp.id">
                    <div class="makeUpItem">
                        <div class="makeUpImg" :style="{backgroundImage:'url('+require('@/assets/'+makeUp.img)+')',backgroundRepeat:'no-repeat',backgroundSize:'cover'}"></div>
                        <p class="makeUpText">{{ makeUp.text }}</p>
                    </div>
                </li>
            </ul>
        </section>
        <section id="side">
            <div class="login_bt"><a href="/login">로그인</a></div>
        </section>
    </main>
</template>

<script>
const makeUpItem=[ { id:1,img:"makeup1.jpg",text:"메이크업1"},
        { id:2, img:"makeup2.png",text:"메이크업2"},{ id:3, img:"makeup3.png",text:"메이크업3"}
    ,{ id:4, img:"makeup4.jpg",text:"메이크업4"},
    { id:5, img:"makeup5.jpg",text:"메이크업5"}
   ];
export default{
    data(){
        return {makeUpItem};
    },
    name:"SdmMakeup",
}
</script>


<style>
@import '@/assets/makeup.css';
</style>