<script setup lang="ts">
  import { useStore } from 'vuex';

  const store = useStore()
  store.dispatch('forms/getForms')
</script>

<template>
  <main class="main">
    <RouterView />
  </main>
</template>

<style scoped>
  .main {
    min-height: 100vh;
    background: #aaaaaa;

    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
