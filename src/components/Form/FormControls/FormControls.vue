<script setup lang="ts">
    import type { Emits } from './types';

    const emit = defineEmits<Emits>()

    const handleCancel = () => {
        emit('cancel')
    }
</script>

<template>
    <div class="form-controls">
        <button 
            type="submit" 
            class="form-controls__button"
        >
            Save
        </button>
        <button 
            type="button"
            class="form-controls__button" 
            @click="handleCancel"
        >
            Cancel
        </button>
    </div>
</template>

<style lang="scss" scoped>
    .form-controls {
        display: flex;
        justify-content: center;
        gap: 8px;

        &__button {
            width: 140px;
        }
    }
</style>
