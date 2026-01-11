<script setup lang="ts">
    import { computed } from 'vue';
    import { useStore } from 'vuex';
    import { useRoute, useRouter } from 'vue-router';
    import SavedDataTable from '@/components/Table/SavedDataTable.vue';

    const store = useStore()
    const route = useRoute()
    const router = useRouter()
    const formId = Number(route.params.formId)

    const title = computed(() => store.getters['forms/getFormById'](formId)?.title)

    const handleHomeClick = () => {
        router.push('/')
    }
</script>

<template>
    <div class="page">
        <h3>{{ title }}</h3>
        <SavedDataTable :form-id="formId" />
        <button type="button" @click="handleHomeClick">Back to forms</button>
    </div>
</template>

<style lang="scss" scoped>
    .page {
        margin: 2rem auto;
        padding: 2rem;
        background: #ffffff;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;

        h3 {
            font-size: 2rem;
            font-weight: bold;
        }
    }
</style>