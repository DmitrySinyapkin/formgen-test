<script setup lang="ts">
  import { useStore } from 'vuex';

  const store = useStore()
  store.dispatch('forms/getForms')
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
