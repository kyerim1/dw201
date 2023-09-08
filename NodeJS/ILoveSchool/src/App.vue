<script >
import { RouterLink, RouterView } from 'vue-router'
const sessionStorage= window.sessionStorage;
const uid = sessionStorage.getItem('user_id')
export default{
    name:'App',
    data(){      return { uid}    }
}
</script>
<template>
  <header>
    <div class="wrapper">
      <img class="logo" src="@/assets/main.jpg">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink v-if="uid==null" to="/login">Login</RouterLink>
        <RouterLink v-if="uid!==null" to="/logout">Logout</RouterLink>

        <RouterLink to="/msg">축하메시지</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  width:300px;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
