<template>
    <div class="topMenu">
        <ul>
            <li>home</li>
            <li>로그인</li>
            <li>동물보호관리시스템</li>
        </ul>
    </div>
</template>

<script setup>

</script>

<style scoped>
.topMenu{
    position:absolute;
    top:0; left:0;
    width:100%;
    background:#3b414d;
    color:#fff;
}
ul{
    list-style: none;
    padding:0; margin:0;
    display:flex;
    justify-content: end;
    width:1200px;
    margin:0 auto;
    padding:10px 0; column-gap: 15px;
}
</style>