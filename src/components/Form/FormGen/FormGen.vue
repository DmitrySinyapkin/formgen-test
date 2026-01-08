<script setup lang="ts">
    import type { Props, Emits } from './types';
    import type { FormData } from '@/types/form';
    import FormField from '../FormField/FormField.vue';
    import FormControls from '../FormControls/FormControls.vue';

    const { fields } = defineProps<Props>()
    const emit = defineEmits<Emits>()
    const modelValue = defineModel<FormData>()

    const handleSubmit = () => {
        emit('submit')
    }

    const handleCancel = () => {
        emit('cancel')
    }
</script>

<template>
    <form class="form" @submit.prevent="handleSubmit">
        <FormField
            v-for="(field, name) in fields"
            :key="name"
            :name="name"
            :type="field.type"
            :label="field.label"
            :attrs="field.attrs"
            :options="field.options"
            v-model="modelValue![name]"
        />
        <FormControls @cancel="handleCancel"/>
    </form>
</template>

<style lang="scss" scoped>
    .form {
        max-width: 600px;
        margin: 2rem auto;
        padding: 2rem;
        background: #ffffff;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
