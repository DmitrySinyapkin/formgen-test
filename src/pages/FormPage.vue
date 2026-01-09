<script setup lang="ts">
    import { computed, ref } from 'vue';
    import { useStore } from 'vuex';
    import { useRoute, useRouter } from 'vue-router';
    import FormGen from '@/components/Form/FormGen/FormGen.vue';
    import type { FormData } from '@/types/form';
    import { getInitialValues } from '@/utils/form';

    const store = useStore()
    const route = useRoute()
    const router = useRouter()

    const form = computed(() => store.getters['forms/getFormById'](Number(route.params.formId)))

    const formData = ref<FormData>(getInitialValues(form.value))

    const handleSubmit = () => {
        console.log(formData.value)
    }

    const handleCancel = () => {
        router.push('/')
    }
</script>

<template>
    <div class="form">
        <h3>{{ form.title }}</h3>
        <FormGen
            :fields="form.fields"
            v-model="formData"
            @submit="handleSubmit"
            @cancel="handleCancel"
        >
        </FormGen>
    </div>
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

        h3 {
            font-size: 2rem;
            font-weight: bold;
        }
    }
</style>
