<script setup lang="ts">
    import type { Props } from './types';
    import LabeledField from '../LabeledField/LabeledField.vue';

    const {
        label,
        attrs,
        name 
    } = defineProps<Props>()

    const modelValue = defineModel()
</script>

<template>
    <LabeledField
        :name="name"
        :label="label"
    >
        <input
            :id="name"
            v-model="modelValue"
            v-bind="attrs"
        />
    </LabeledField>
</template>
