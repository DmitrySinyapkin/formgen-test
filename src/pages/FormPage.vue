<script setup lang="ts">
    import { computed, ref } from 'vue';
    import { useStore } from 'vuex';
    import { useRoute, useRouter } from 'vue-router';
    import FormGen from '@/components/Form/FormGen/FormGen.vue';
    import type { FormData } from '@/types/form';

    const store = useStore()
    const route = useRoute()
    const router = useRouter()

    const form = computed(() => store.getters['forms/getFormById'](Number(route.params.formId)))

    const formData = ref<FormData>({})

    const handleSubmit = () => {
        console.log(formData.value)
    }

    const handleCancel = () => {
        router.push('/')
    }
</script>

<template>
    <div>
        <h3>{{ form.title }}</h3>
        <FormGen
            :fields="form.fields"
            v-model="formData"
            @submit="handleSubmit"
            @cancel="handleCancel"
        />
    </div>
</template>
