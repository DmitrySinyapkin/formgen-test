import type { FormData } from "@/types/form";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export function useForm() {
    const store = useStore()
    const router = useRouter()

    const handleSubmit = async (formId: number, data: FormData) => {
        const status = await store.dispatch('data/addDataRecord', { formId, data })

        if (status === 'success') {
            router.push(`/data/${formId}`)
        }
    }

    const handleCancel = () => {
        router.push('/')
    }

    return {
        handleSubmit,
        handleCancel
    }
}
