<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TopMenu from './components/TopMenu.vue'
</script>

<template>
  <header>
    <div id="header_wrap">
      <div class="logo">
        <RouterLink to="/"><img src="@/assets/logo.png" /></RouterLink>
      </div>
      <div class="menu_wrap">
        <TopMenu/>
        <nav class="nav">
          <div class="menu"><RouterLink to="/intro">센터소개</RouterLink></div>
          <div class="menu"><RouterLink to="/information">동물보호정보</RouterLink></div>
          <div class="menu"><RouterLink to="/adoption">입양</RouterLink></div>
          <div class="menu"><RouterLink to="/join">참여소통</RouterLink></div>
          <div class="menu"><RouterLink to="/park">반려동물공원</RouterLink></div>
        </nav>
      </div>
    </div>  
  </header>

  <RouterView />
</template>

<style >
*{padding:0;margin:0;box-sizing: border-box;}
#app{
  width:100%;
  position:relative;
}
header {
  width:100%;
  position:relative;
  border-bottom:1px solid #ddd;
}
#header_wrap{
  width:1200px;
  margin:0 auto;
  display:flex;
  align-items: center;
  padding:50px 0 25px 0;

}
#header_wrap .logo{
  width:200px;
}
#header_wrap .logo img{width:100%;}
.menu_wrap{width:100%;}
.menu_wrap .nav{
  width:100%;
  display:flex;
  justify-content: space-evenly;
  font-size:20px;
  font-weight:800;
}
</style>
