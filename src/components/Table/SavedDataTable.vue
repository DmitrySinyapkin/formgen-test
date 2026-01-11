<script setup lang="ts">
    import { useStore } from 'vuex';
    import { computed } from 'vue';
    import type { Props } from './types';
    import type { Field } from '@/types/form';

    const { formId } = defineProps<Props>()

    const store = useStore()

    const headers = computed(() => (Object.values(store.getters['forms/getFormById'](formId).fields) as Field[]).map(value => value.label))
    const records = computed(() => store.getters['data/getDataByFormId'](formId))
</script>

<template>
    <table class="table">
        <thead>
            <tr>
                <th
                    v-for="header in headers"
                    :key="header"
                    class="cell header" 
                >
                    {{ header }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr
                v-for="(record, index) in records"
                :key="index"
            >
                <td
                    v-for="(value, index) in Object.values(record.data)"
                    :key="index"
                    class="cell"
                >
                    {{ value }}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style lang="scss" scoped>
    .table {
        width: 100%;
    }
    
    .cell {
        padding: 8px;
        text-align: center;
        border: 1px solid #000000;
        border-collapse: collapse;
    }

    .header {
        font-weight: bold;
    }
</style>
