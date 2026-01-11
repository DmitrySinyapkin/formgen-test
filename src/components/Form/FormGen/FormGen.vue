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

    const updateValue = (name: string, value: string | boolean) => {
        if (modelValue.value) {
            modelValue.value[name] = value
        }
    }
</script>

<template>
    <form class="form" @submit.prevent="handleSubmit">
        <div class="fields">
            <slot
                v-for="(field, name) in fields"
                :key="name"
                :name="name"
                :attrs="field.attrs"
                :options="field.options"
                :model-value="modelValue![name]"
                :update-model-value="(value: string | boolean) => updateValue(name, value)"
            >
                <FormField
                    :name="name"
                    :type="field.type"
                    :label="field.label"
                    :attrs="field.attrs"
                    :options="field.options"
                    v-model="modelValue![name]"
                />
            </slot>
        </div>
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

        .fields {
            width: 100%;
            display: flex;
            flex-direction: column;
        }
    }
</style>
