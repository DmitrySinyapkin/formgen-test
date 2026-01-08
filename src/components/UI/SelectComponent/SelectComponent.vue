<script setup lang="ts">
    import type { Props } from './types'; 
    import LabeledField from '../LabeledField/LabeledField.vue';

    const {
        label,
        attrs,
        options,
        name 
    } = defineProps<Props>()

    const modelValue = defineModel()
</script>

<template>
    <LabeledField
        :name="name"
        :label="label"
    >
        <select
            :id="name"
            v-model="modelValue"
            v-bind="attrs"
        >
            <option
                v-for="option in options"
                :key="option.value"
                :value="option.value"
            >
                {{ option.label }}
            </option>
        </select>
    </LabeledField>
</template>
