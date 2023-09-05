<template>
 <i class="bi bi-android2"></i>
  <header id="header">
      <div class="logo"><a href="/"><img src="./assets/logo.png"></a></div>
      <nav class="nav">
          <ul class="menuList">
              <li class="menu"><a href="/studio">스튜디오</a></li>
              <li class="menu"><a href="/dress">드레스</a></li>
              <li class="menu"><a href="/makeup">메이크업</a></li>
              <li class="menu"><a href="/wedding">예식장</a></li>
              <li class="menu"><a href="/qs">Q&A</a></li>
          </ul>
      </nav>
  </header>
  <router-view/>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
}
</script>

<style>
*{
    padding:0;
    margin:0;
    box-sizing: border-box;
}
#app{
    width:1000px;
    margin:0 auto;
    position:relative;
}
#header{
    width:100%;
    padding:30px 0;
    display:flex; 
    justify-content: space-between;
    align-items: center;
}
#header .logo{width:150px;}
#header .logo img{width:100%;}
#header .nav{width:850px;}
#header .nav .menuList{
    list-style: none;
    width:100%; 
    display:flex;
    justify-content: space-evenly;
    font-size:20px;
}
#header .nav .menuList .menu a{
    color:black;
    text-decoration: none;
    font-weight:800;
}

#main{
    display:grid;
    grid-template-columns: 4fr 1fr;
}
#side .login_bt{
    padding:10px 10px;
}
#side .login_bt a{
    color:white;
    text-decoration: none;
    background:#646EFF;
    padding:10px 0;
    width:100%;  
    font-size:20px; font-weight:800;
    display:inline-block;
    border-radius: 5px;
    text-align: center;
}
#side .login_bt p{
    padding-bottom:10px;
    font-weight:800;
}

</style>
