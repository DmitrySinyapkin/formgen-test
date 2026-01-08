<script setup lang="ts">
    import type { Props } from './types';
    import { useField } from '@/composables/useField/useField';

    const {
        type,
        label,
        attrs,
        options,
        name
    } = defineProps<Props>()

    const modelValue = defineModel()

    const { component } = useField(type)
</script>

<template>
    <slot
        :name="name"
        :options="options"
    >
        <component
            :is="component"
            :label="label"
            :name="name"
            :attrs="attrs"
            :options="options"
            v-model="modelValue"
        />
    </slot>
</template>
