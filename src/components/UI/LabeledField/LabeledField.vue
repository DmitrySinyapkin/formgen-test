<script setup lang="ts">
    import type { Props } from './types';

    const {
        label,
        name 
    } = defineProps<Props>()
</script>

<template>
    <div class="input-field">
        <label :for="name">{{ label }}</label>
        <slot />
    </div>
</template>

<style lang="scss" scoped>
    .input-field {
        display: flex;
        flex-direction: column;
        gap: 8px;
        width: 100%;
        padding: 8px 0;
    }
</style>
