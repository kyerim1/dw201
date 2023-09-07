<script>
  import { inject } from 'vue'; // 상위 컴포넌트에서 provide한 값 가져오려면 inject필요

  export default{
    name:"App",
  setup(){
    const today = inject('today') // 상위 컴포넌트에서 provide한 값 주입
    return { today}
  }
}
</script>

<template>
  <header>
    <hgroup class="my-5">
      <h1>나의 할일</h1>
      <em> {{  today  }}</em>
    </hgroup>
  </header>
  <RouterView/>  <!--  라우터를 통해 보여질 컴포넌트 template 영역-->
</template>

<style scoped>
hgroup{
  text-align: center;
  font-family: 'Arial Bold';
}
hgroup h1{
  font-weight:bolder;
}
</style>
