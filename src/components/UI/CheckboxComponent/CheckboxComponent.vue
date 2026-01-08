<script setup lang="ts">
    import type { Props } from '../TextComponents/types'; 

    const {
        name,
        attrs,
        label
    } = defineProps<Props>()

    const modelValue = defineModel()
</script>

<template>
    <div class="checkbox-field">
        <input
            type="checkbox"
            v-model="modelValue"
            v-bind="attrs"
        />
        <label :for="name">{{ label }}</label>
    </div>
</template>

<style lang="scss" scoped>
    .input-field {
        display: flex;
        align-items: center;
        gap: 8px;
        width: 100%;
        padding: 8px 0;
    }
</style>
