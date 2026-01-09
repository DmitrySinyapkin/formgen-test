<script setup lang="ts">
    import { computed } from 'vue';
    import { useStore } from 'vuex';

    const store = useStore()

    const forms = computed(() => store.state.forms.forms)
</script>

<template>
    <div class="page">
        <h1>FormGen App</h1>
        <div class="forms">
            <h3>Forms:</h3>
            <RouterLink :to="`/forms/${forms[0].id}`">{{ forms[0].title }}</RouterLink>
            <RouterLink :to="`/custom-forms/${forms[1].id}`">{{ forms[1].title }}</RouterLink>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .page {
        max-width: 600px;
        min-height: 200px;
        margin: 2rem auto;
        padding: 2rem;
        background: #ffffff;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;

        h1 {
            font-size: 2rem;
            font-weight: bold;
        }

        h3 {
            font-size: 1.5rem;
            font-weight: bold;
        }

        .forms {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
        }
    }
</style>
