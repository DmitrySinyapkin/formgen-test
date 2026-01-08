<script setup lang="ts">
    import { computed } from 'vue';
    import { useStore } from 'vuex';

    const store = useStore()

    const forms = computed(() => store.state.forms.forms)

    store.dispatch('forms/getForms')
</script>

<template>
    <h1>FormGen App</h1>
    <div>
        <h4>Forms:</h4>
        <div>
            <RouterLink v-for="form in forms" :key="form.id" :to="`/forms/${form.id}`">{{ form.title }}</RouterLink>
        </div>
    </div>
</template>

<style scoped></style>
