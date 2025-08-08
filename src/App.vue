<script setup>
import { RouterLink, RouterView } from 'vue-router'
import FooterMain from './components/FooterMain.vue';
</script>

<template>
  <header>
    <div class="wrapper">
      <h3 class="title-header">Quotes from Ozymandias</h3>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
  <FooterMain />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.title-header {
 color: white;
}

.wrapper {
  text-align: center;
}

nav {
  width: 100%;
  text-align: center;
  margin-top: 2rem;
  font-family: "Lexend Giga", sans-serif;
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
}

@media (min-width: 1024px) {
  nav {
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
