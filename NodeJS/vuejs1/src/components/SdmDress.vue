<template>
    <main id="main">
        
        <section id="content">
            <h1>웨딩 드레스</h1>
            <ul class="dressList">
                <li v-for="dress in dressItem" :key="dress.id">
                    <div class="dressItem">
                        <div class="dressImg" :style="{backgroundImage:'url('+require('@/assets/'+dress.img)+')',backgroundRepeat:'no-repeat',backgroundSize:'cover'}"></div>
                        <p class="dressText">{{ dress.text }}</p>
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
const dressItem=[ { id:1,img:"dress1.jpg",text:"웨딩드레스"},
        { id:2, img:"dress2.jpg",text:"웨딩드레스"},{ id:3, img:"dress3.png",text:"웨딩드레스"}
    ,{ id:4, img:"dress4.jpg",text:"웨딩드레스"},{ id:5, img:"dress5.jpg",text:"웨딩드레스"},
    { id:6, img:"dress6.jpg",text:"웨딩드레스"}];
export default{
    data(){
        return {dressItem};
    },
    name:"SdmDress",
}
</script>


<style>
@import '@/assets/dress.css';
</style>