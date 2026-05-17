<script setup>
import { RouterView } from 'vue-router'
import HeaderMain from './components/HeaderMain.vue';
import FooterMain from './components/FooterMain.vue';
</script>

<template>
<HeaderMain />
  <RouterView v-slot="{ Component }">
    <Transition name="fade" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>
  <FooterMain />
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
